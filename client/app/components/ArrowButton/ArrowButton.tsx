import "./ArrowButton.scss";

import clsx from "clsx";

import { useEffect, useState } from "react";

import ArrowTopIcon from "~/assets/icons/arrow-top.svg?react";

interface ArrowButtonProps {
  onClick?: () => void;
  directionArrow?: "top" | "right" | "bottom" | "left";
  className: string;
}

const ArrowButton = ({
  onClick,
  directionArrow,
  className,
}: ArrowButtonProps) => {
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
      className={clsx(
        "arrow-button",
        // { active: isVisible },
        `arrow-button--${directionArrow}`,
        className,
      )}
      onClick={onClick}
    >
      <ArrowTopIcon />
    </button>
  );
};

export default ArrowButton;
