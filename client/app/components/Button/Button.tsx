import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  className: string;
  href?: string;
  children: string;
  variant?: "dark";
}

const Button = ({ className, href, children, variant }: ButtonProps) => {
  return href ? (
    <a href={href} className={clsx("button", className)}>
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={clsx("button", className, `button--${variant}`)}
    >
      {children}
    </button>
  );
};

export default Button;
