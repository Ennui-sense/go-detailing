import "./FooterGroup.scss";

import type { FooterGroupItem } from "~/types";

interface FooterGroupProps {
  title: string;
  items: FooterGroupItem[];
}

const FooterGroup = ({ title, items }: FooterGroupProps) => {
  return (
    <div className="footer-group">
      <h3 className="footer-group__title">{title}</h3>

      <ul className="footer-group__list">
        {items.map(({ id, href, label }) => (
          <li className="footer-group__item" key={id}>
            {href ? (
              <a className="footer-group__link" href={href}>
                {label}
              </a>
            ) : (
              <p className="footer-group__text">{label}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterGroup;
