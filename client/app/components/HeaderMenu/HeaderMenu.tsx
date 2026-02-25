import "./HeaderMenu.scss";

import { HeaderMenuLinksData } from "~/data/HeaderMenuItemsData";

const HeaderMenu = () => {
  return (
    <nav className="header-menu">
      <ul className="header-menu__list">
        {HeaderMenuLinksData.map(({id, label, href}) => (
          <li className="header-menu__item" key={id}>
            <a href={href} className="header-menu__link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
