import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import "./Header.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Link from "../Link/Link";
import BurgerButton from "../BurgerButton/BurgerButton";
import MenuModal from "../MobileModal/MobileModal";

import { useMediaQuery } from "~/hooks/useMediaQuery";

import LogoImageSrc from "~/assets/images/logo.svg";
import LogoImageSrcMobile from "~/assets/images/logo-mobile.svg";

import { formatPhone } from "~/formatters/formatPhone";

import { useRouteLoaderData } from "react-router";
import type { loader as rootLoader } from "~/root";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 47.9375rem)");
  const rootData = useRouteLoaderData<typeof rootLoader>("root");

  if (!rootData) return null;

  const { info } = rootData;

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

        <div className="header__actions">
          <Link
            className="header__link"
            href={`tel:${formatPhone(info.contacts.phone)}`}
            variant="border"
          >
            {info.contacts.phone}
          </Link>

          {!isMobile ? (
            <Link
              className="header__link"
              href="https://n2056470.yclients.com/"
              openInNewWindow
            >
              Записаться
            </Link>
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
