import clsx from "clsx";
import "./Logo.scss";

import LogoImage from "~/assets/images/logo.svg";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/" className={clsx("logo", className)}>
      <img
        src={LogoImage}
        alt="Наш логотип"
        className="logo__image"
        width={190}
        height={108}
        loading="lazy"
      />
    </a>
  );
};

export default Logo;
