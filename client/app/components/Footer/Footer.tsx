import "./Footer.scss";

import FooterTop from "../FooterTop/FooterTop";
import FooterBottom from "../FooterBottom/FooterBottom";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Footer = () => {
	const isMobileSmall = useMediaQuery("(max-width: 30rem)")

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <FooterTop isMobile={isMobileSmall}/>
        <FooterBottom isMobile={isMobileSmall}/>
      </div>
    </footer>
  );
};

export default Footer;
