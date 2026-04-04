import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  className: string;
  children: string;
  href?: string;
  variant?: "dark";
  openInNewWindow?: boolean;
	onClick?: () => void;
}

const Button = ({
  className,
  href,
  children,
  variant,
  openInNewWindow = true,
	onClick
}: ButtonProps) => {
  return href ? (
    <a
      href={href}
      className={clsx(className, "button", `button--${variant}`)}
      target={openInNewWindow ? "_blank" : undefined}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={clsx(className, "button", `button--${variant}`)}
			onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
