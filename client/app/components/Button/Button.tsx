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
    <a href={href} className={clsx(className, "button")}>
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={clsx(className, "button", `button--${variant}`)}
    >
      {children}
    </button>
  );
};

export default Button;
