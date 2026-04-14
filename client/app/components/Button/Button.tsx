import "./Button.scss";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: string;
  variant?: "dark";
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(className, "button", {
        [`button--${variant}`]: variant,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
