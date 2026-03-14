import "./BackToTopButton.scss";

import clsx from "clsx";

import { useEffect, useState } from "react";

import ArrowTopIcon from "~/assets/icons/arrow-top.svg?react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      const coords = document.documentElement.clientHeight;

      setIsVisible(offset > coords);
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={clsx("back-to-top-button", { active: isVisible })}
      onClick={() => scrollToTop()}
    >
      <ArrowTopIcon />
    </button>
  );
};

export default BackToTopButton;
