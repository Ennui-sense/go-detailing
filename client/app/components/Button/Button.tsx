import "./Button.scss";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: string;
  href?: string;
  variant?: "dark";
  openInNewWindow?: boolean;
  isPhoneButton?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  href,
  children,
  variant,
  isPhoneButton = false,
  openInNewWindow = true,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a
      href={href}
      className={clsx(className, "button", {
        "button--phone": isPhoneButton,
        [`button--${variant}`]: variant,
      })}
      target={openInNewWindow ? "_blank" : undefined}
      rel={openInNewWindow ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={clsx(className, "button", {
        "button--phone": isPhoneButton,
        [`button--${variant}`]: variant,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
