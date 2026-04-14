import "./AdditionsCard.scss";

import clsx from "clsx";

import { STRAPI_BASE_URL } from "~/api/strapi";

interface AdditionsCardProps {
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  time: string;
  onClick: () => void;
  visibleDetails: boolean;
  isMobile?: boolean;
}

const AdditionsCard = ({
  title,
  time,
  description,
  price,
  imageSrc,
  onClick,
  visibleDetails,
  isMobile,
}: AdditionsCardProps) => {
  const formatTime = (time: string) => {
		const splittedTime = time.split(":")
    return `${splittedTime[0]} ч ${splittedTime[1]} мин`
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
              src={`${STRAPI_BASE_URL}${imageSrc}`}
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
