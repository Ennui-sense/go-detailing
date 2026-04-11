import "./ServicesCard.scss";

import ServicesInfo from "../ServicesInfo/ServicesInfo";
import Button from "../Button/Button";

import type { ServicesIncludedItem } from "~/types";

interface ServicesCardProps {
  label: string;
  value: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: number;
  includedItems: ServicesIncludedItem[];
  includedItemsOnBodywork?: ServicesIncludedItem[];
  includedItemsOnSalon?: ServicesIncludedItem[];
  id: number;
  href: string;
}

const ServicesCard = ({
  time,
  label,
  value,
  minPrice,
  maxPrice,
  description,
  includedItems,
  includedItemsOnBodywork,
  includedItemsOnSalon,
  id,
  href,
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
            <h3 className="services-card__title">{label}</h3>
            <p className="services-card__time">{formatTime(time)}</p>
          </div>

          <p className="services-card__description">{description}</p>
        </header>

        <div className="services-card__body">
          <p className="services-card__price">
            {formatPrice(minPrice, maxPrice)}
          </p>
          <ServicesInfo
            includedItems={includedItems}
            isSalonService={value === "salon"}
            includedItemsOnBodywork={includedItemsOnBodywork}
            includedItemsOnSalon={includedItemsOnSalon}
          />
          <Button
            className="services-card__button"
            variant={id === 2 ? "dark" : undefined}
            href={href}
          >
            Заказать
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ServicesCard;
