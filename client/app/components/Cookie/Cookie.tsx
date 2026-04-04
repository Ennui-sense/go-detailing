import "./Cookie.scss";

import Button from "../Button/Button";
import clsx from "clsx";

interface CookieProps {
  onClick: () => void;
  isVisible: boolean;
}

const Cookie = ({ onClick, isVisible }: CookieProps) => {
  return (
    <div className={clsx("cookie", { "cookie--active": isVisible })}>
      <div className="cookie__inner container">
        <p className="cookie__text">
          Мы используем cookies для быстрой и удобной работы сайта.{"\n"}
          Продолжая пользоваться сайтом, вы принимаете
          условия обработки персональных данных
        </p>

        <Button className="cookie__button" onClick={onClick}>
          Принять
        </Button>
      </div>
    </div>
  );
};

export default Cookie;
