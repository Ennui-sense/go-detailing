import "./FooterTop.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { MenuLinksData } from "~/data/MenuLinksData";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <Logo className="footer-top__logo" />
      <Menu className="footer-top__menu" />

      <div className="footer-top__info">
        <a href="tel:+79223186599" className="footer-top__phone">
          +7 922 318 6599
        </a>
        <p className="footer-top__work">Ежедневно, 24/7</p>
      </div>
    </div>
  );
};

export default FooterTop;
