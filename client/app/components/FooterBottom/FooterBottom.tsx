import "./FooterBottom.scss";

import Soc1als from "../Soc1als/Soc1als";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <small className="footer-bottom__copyright">
        © <time dateTime="2026">2026</time> Go detailing
      </small>

      <div className="footer-bottom__info">
        <div className="footer-bottom__text">
          Все права защищены. Копирование и использование информации с сайта без
          согласия владельца преследуется по закону
        </div>

        <p className="footer-bottom__developer">
          Разработка сайта:{" "}
          <a
            className="footer-bottom__developer-link"
            href="https://t.me/child_of_mooon"
          >
            Lune Phlare
          </a>
        </p>
      </div>

      <Soc1als className="footer__socials" />
    </div>
  );
};

export default FooterBottom;
