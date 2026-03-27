import "./Header.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import BurgerButton from "../BurgerButton/BurgerButton";

import { useState, useEffect } from "react";

import LogoImageSrc from "~/assets/images/logo.svg";
import LogoImageSrcMobile from "~/assets/images/logo-mobile.svg";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 47.9375rem)");

    const checkMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="header">
      <div className="header__inner container">
        <Logo
          className="header__logo"
          imageSrc={isMobile ? LogoImageSrcMobile : LogoImageSrc}
        />
        {!isMobile && <Menu className="header__menu" />}

        <div className="header__buttons">
          <Button
            className="header__phone button--phone"
            href="tel:+73422737107"
          >
            +7 (342) 27-37-107
          </Button>

          {!isMobile ? (
            <Button className="header__button">Записаться</Button>
          ) : (
            <BurgerButton onClick={() => console.log("click")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
