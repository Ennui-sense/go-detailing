import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  className: string;
  href?: string;
  children: string;
}

const Button = ({ className, href, children }: ButtonProps) => {
  return href ? (
    <a href={href} className={clsx("button", className)}>
      {children}
    </a>
  ) : (
    <button type="button" className={clsx("button", className)}>
      {children}
    </button>
  );
};

export default Button;
