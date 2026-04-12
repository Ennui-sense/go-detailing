import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import "./Header.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import BurgerButton from "../BurgerButton/BurgerButton";
import MenuModal from "../MobileModal/MobileModal";

import { useMediaQuery } from "~/hooks/useMediaQuery";

import LogoImageSrc from "~/assets/images/logo.svg";
import LogoImageSrcMobile from "~/assets/images/logo-mobile.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 47.9375rem)");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.documentElement.classList.toggle("is-lock", isModalOpen);

    return () => {
      document.documentElement.classList.remove("is-lock");
    };
  }, [isModalOpen]);

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo
          className="header__logo"
          imageSrc={isMobile ? LogoImageSrcMobile : LogoImageSrc}
        />

        {!isMobile && <Menu className="header__menu" />}

        <div className="header__buttons">
          <Button
            className="header__phone"
            href="tel:+73422737107"
            isPhoneButton
          >
            +7 (342) 27-37-107
          </Button>

          {!isMobile ? (
            <Button className="header__button">Записаться</Button>
          ) : (
            <>
              <BurgerButton onClick={openModal} />
              <AnimatePresence mode="wait">
                {isModalOpen && <MenuModal closeModal={closeModal} />}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;