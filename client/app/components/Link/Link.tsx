import clsx from "clsx";
import "./Link.scss";

interface LinkProps {
  className?: string;
  children: string;
  href: string;
  openInNewWindow?: boolean;
  variant?: "transparent" | "border" | "dark";
}

const Link = ({
  className,
  children,
  href,
  openInNewWindow = false,
  variant,
}: LinkProps) => {
  return (
    <a
      href={href}
      className={clsx(className, "link", {
        [`link--${variant}`]: variant,
      })}
      target={openInNewWindow ? "_blank" : undefined}
      rel={openInNewWindow ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default Link;
