import "./Header.scss";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <Menu className="header__menu"/>

        <div className="header__buttons">
          <Button
            className="header__phone button--phone"
            href="tel:+79223186599"
          >
            +7 922 318 6599
          </Button>
          <Button className="header__button">Записаться</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
