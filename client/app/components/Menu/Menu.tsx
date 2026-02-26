import clsx from "clsx";
import "./Menu.scss";

import { MenuLinksData } from "~/data/MenuLinksData";

interface MenuProps {
  className: string;
}

const Menu = ({ className }: MenuProps) => {
  return (
    <nav className={clsx("menu", className)}>
      <ul className="menu__list">
        {MenuLinksData.map(({ id, label, href }) => (
          <li className="menu__item" key={id}>
            <a href={href} className="menu__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
