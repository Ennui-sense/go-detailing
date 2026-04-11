import "./FooterTop.scss";

import Logo from "../Logo/Logo";
import FooterGroup from "../FooterGroup/FooterGroup";
import Button from "../Button/Button";
import Soc1als from "../Soc1als/Soc1als";

import LogoImageSrc from "~/assets/images/logo.svg";

import { FooterGroupsData } from "~/data/FooterGroupsData";

interface FooterTopProps {
  isMobile: boolean;
}

const FooterTop = ({ isMobile }: FooterTopProps) => {
  return (
    <div className="footer-top">
      <Logo className="footer-top__logo" imageSrc={LogoImageSrc} />

      <div className="footer-top__body">
        {FooterGroupsData.map(({ title, items, id}) => (
          <FooterGroup items={items} title={title} key={id}/>
        ))}
      </div>

      <div className="footer-top__info">
        <div className="footer-top__contacts">
          <Button
            className="footer-top__phone-link button--phone"
            href="tel:+73422737107"
          >
            +7 (342) 27-37-107
          </Button>
          <a
            href="mailto:godetailing@mail.com"
            className="footer-top__email-link"
          >
            godetailing@mail.com
          </a>
        </div>
        {isMobile ? (
          <Soc1als className="footer-top__soc1als" />
        ) : (
          <p className="footer-top__address">г. Пермь, ул. Монастырская,25</p>
        )}
      </div>
    </div>
  );
};

export default FooterTop;
