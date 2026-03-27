import clsx from "clsx";
import "./Logo.scss";

interface LogoProps {
  className: string;
	imageSrc: string
}

const Logo = ({ className, imageSrc }: LogoProps) => {

  return (
    <a href="/" className={clsx("logo", className)}>
      <img
        src={imageSrc}
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
