import "./ServicesCard.scss";

import ServicesInfo from "../ServicesInfo/ServicesInfo";
import Button from "../Button/Button";

import type { IIncludedItem } from "~/data/ServicesCardsData";

interface ServicesCardProps {
  title: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: number;
  includedItems: IIncludedItem[];
	id: number;
}

const ServicesCard = ({
  time,
  title,
  minPrice,
  maxPrice,
  description,
  includedItems,
	id
}: ServicesCardProps) => {
  const formatPrice = (minPrice: number, maxPrice: number) => {
    return `от ${minPrice.toLocaleString("ru-Ru")} ₽-${maxPrice.toLocaleString("ru-Ru")} ₽`;
  };

  const formatTime = (time: number) => {
    return time % 60 === 0
      ? `${time / 60} ч`
      : `${Math.floor(time / 60)} ч ${time % 60} мин`;
  };

  return (
    <article className="services-card">
      <div className="services-card__inner">
        <header className="services-card__header">
          <div className="services-card__info">
            <h3 className="services-card__title">{title}</h3>
            <p className="services-card__time">{formatTime(time)}</p>
          </div>

          <p className="services-card__description">{description}</p>
        </header>

        <div className="services-card__body">
          <p className="services-card__price">
            {formatPrice(minPrice, maxPrice)}
          </p>
          <ServicesInfo includedItems={includedItems}/>
          <Button className="services-card__button" variant={id === 2 ? "dark" : undefined}>Заказать</Button>
        </div>
      </div>
    </article>
  );
};

export default ServicesCard;
