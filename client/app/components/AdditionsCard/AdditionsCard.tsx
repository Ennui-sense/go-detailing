import clsx from "clsx";
import "./AdditionsCard.scss";

import type { AdditionCard } from "~/types";

interface AdditionsCardProps {
  data: AdditionCard;
  onClick: () => void;
  visibleDetails: boolean;
  isMobile?: boolean;
}

const AdditionsCard = ({
  data,
  onClick,
  visibleDetails,
  isMobile,
}: AdditionsCardProps) => {
  const { title, time, description, imageSrc, price } = data;

  const formatTime = (time: number) => {
    if (time % 60 === 0) {
      return `${time / 60} ч`;
    } else if (time < 60) {
      return `${time} мин`;
    }

    return `${Math.floor(time / 60)} ч ${time % 60} мин`;
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} ₽`;
  };

  return (
    <article
      className="additions-card"
      onClick={isMobile ? undefined : onClick}
    >
      <div
        className={clsx("additions-card__inner", {
          "is-flipped": isMobile ? true : visibleDetails ? true : false,
        })}
      >
        <div className="additions-card__face additions-card__face--front">
          <div className="additions-card__wrapper-image">
            <img
              src={imageSrc}
              alt=""
              className="additions-card__image"
              width={540}
              height={405}
              loading="lazy"
            />
          </div>
          <h3 className="additions-card__title">{title}</h3>
        </div>
        <div className="additions-card__face additions-card__face--back">
          <header className="additions-card__header">
            <p className="additions-card__time">{formatTime(time)}</p>
            <p className="additions-card__price">{formatPrice(price)}</p>
          </header>

          <h3 className="additions-card__title">{title}</h3>
          <p className="additions-card__description">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default AdditionsCard;
