import clsx from "clsx";
import "./Menu.scss";

import { Link } from "react-router";

import { MenuLinksData } from "~/data/MenuLinksData";

import ArrowIcon from "~/assets/icons/arrow-top.svg?react";

interface MenuProps {
  className?: string;
  isModalMenu?: boolean;
}

const Menu = ({ className, isModalMenu = false}: MenuProps) => {
  return (
    <nav className={clsx("menu", className, {"menu--modal": isModalMenu})}>
      <ul className="menu__list">
        {MenuLinksData.map(({ id, label, href }) => (
          <li className="menu__item" key={id}>
            <Link to={href} className="menu__link">
              {label}

              {isModalMenu && <ArrowIcon />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
