import "./Footer.scss";

import FooterTop from "../FooterTop/FooterTop";
import FooterBottom from "../FooterBottom/FooterBottom";

import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 30rem)");

    const handleChange = () => {
      setIsMobile(mobileQuery.matches);
    };

    handleChange();

    mobileQuery.addEventListener("change", handleChange);

    return () => mobileQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <FooterTop isMobile={isMobile}/>
        <FooterBottom isMobile={isMobile}/>
      </div>
    </footer>
  );
};

export default Footer;
