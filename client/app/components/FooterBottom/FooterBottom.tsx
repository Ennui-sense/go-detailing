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

        <div className="footer-bottom__developers">
          <p className="footer-bottom__developer">
            Дизайн сайта:{" "}
            <a
              className="footer-bottom__developer-link"
              href="https://clck.ru/3S323i"
            >
              Келлер Мила
            </a>{" "}
          </p>
          <p className="footer-bottom__developer">
            Разработка сайта:{" "}
            <a
              className="footer-bottom__developer-link"
              href="https://portfolioshreder.vercel.app/"
            >
              Шредер Анатолий
            </a>{" "}
          </p>
        </div>

        {/* <a
            className="footer-bottom__developer-link"
            href="https://t.me/child_of_mooon"
          >
            Шредер Анатолий
          </a>
        </p> */}
      </div>

      <Soc1als className="footer__socials" />
    </div>
  );
};

export default FooterBottom;
