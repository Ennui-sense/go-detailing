import "./FooterTop.scss";

import Logo from "../Logo/Logo";
import FooterTopList from "../FooterTopList/FooterTopList";
import Button from "../Button/Button";

import LogoImageSrc from "~/assets/images/logo.svg";

import { FooterTopListsData } from "~/data/FooterTopListsData";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <Logo className="footer-top__logo" imageSrc={LogoImageSrc} />

      <div className="footer-top__body">
        {FooterTopListsData.map(({ title, items }) => (
          <FooterTopList items={items} title={title} />
        ))}
      </div>

      <div className="footer-top__info">
        <div className="footer-top__contacts">
          <Button className="footer-top__phone-link" href="tel:+73422737107">
            +7 (342) 27-37-107
          </Button>
          <a
            href="mailto:godetailing@mail.com"
            className="footer-top__email-link"
          >
            godetailing@mail.com
          </a>
        </div>
        <p className="footer-top__address">г. Пермь, ул. Монастырская,25</p>
      </div>
    </div>
  );
};

export default FooterTop;
