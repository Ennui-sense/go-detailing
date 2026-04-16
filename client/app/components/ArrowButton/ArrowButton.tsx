import "./ArrowButton.scss";

import clsx from "clsx";

import ArrowTopIcon from "~/assets/icons/arrow-top.svg?react";

interface ArrowButtonProps {
  onClick?: () => void;
  directionArrow?: "top" | "right" | "bottom" | "left";
  className?: string;
  isVisible?: boolean;
  isScrollButton?: boolean;
	variant?: "dark"
}

const ArrowButton = ({
  onClick,
  directionArrow,
  className,
  isVisible,
  isScrollButton = false,
	variant
}: ArrowButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "arrow-button",
        {
					[`arrow-button--${directionArrow}`]: directionArrow,
					[`arrow-button--${variant}`]: variant,
          "arrow-button--visible": isVisible,
          "arrow-button--scroll": isScrollButton,
        },
        className,
      )}
      onClick={onClick}
    >
      <ArrowTopIcon />
    </button>
  );
};

export default ArrowButton;
