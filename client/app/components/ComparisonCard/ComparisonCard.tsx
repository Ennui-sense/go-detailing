import "./ComparisonCard.scss";

import clsx from "clsx";

interface ComparisonCardProps {
  title: string;
  imageSrc: string;
  index: number;
  items: { id: number; label: string }[];
  reversed: boolean;
}

const ComparisonCard = ({
  title,
  imageSrc,
  index,
  items,
  reversed,
}: ComparisonCardProps) => {
  return (
    <article
      className={clsx("comparison-card", {
        "comparison-card--reversed": reversed,
      })}
    >
      <div className="comparison-card__body">
        <p className="comparison-card__step h3">{index} Ступень</p>
        <h3 className="comparison-card__title h2">{title}</h3>
        <ul className="comparison-card__list">
          {items.map(({ id, label }) => (
            <li className="comparison-card__item" key={id}>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={imageSrc}
        alt=""
        className="comparison-card__image"
        width={550}
        height={450}
      />
    </article>
  );
};

export default ComparisonCard;
