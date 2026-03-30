import "./FooterTopList.scss";

interface IFooterTopItem {
  id: number;
  href?: string;
  label: string;
}

interface FooterTopListProps {
  title: string;
  items: IFooterTopItem[];
}

const FooterTopList = ({ title, items }: FooterTopListProps) => {
  return (
    <div className="footer-top-list">
      <h3 className="footer-top-list__title">{title}</h3>

      <ul className="footer-top-list__list">
        {items.map(({ id, href, label }) => (
          <li className="footer-top-list__item">
            {href ? (
              <a className="footer-top-list__link" href={href}>
                {label}
              </a>
            ) : (
              <p className="footer-top-list__text">{label}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterTopList;
