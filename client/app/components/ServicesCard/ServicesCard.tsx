import "./ServicesCard.scss";

import ServicesInfo from "../ServicesInfo/ServicesInfo";
import Link from "../Link/Link";

import type { ServiceStrapiItem } from "~/api/types";

interface ServicesCardProps {
  label: string;
  value: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: string;
  includedItems: ServiceStrapiItem[];
  includedItemsOnBodywork: ServiceStrapiItem[];
  includedItemsOnSalon: ServiceStrapiItem[];
  index: number;
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
  index,
  href,
}: ServicesCardProps) => {
  const formatPrice = (minPrice: number, maxPrice: number) => {
    return `от ${minPrice.toLocaleString("ru-Ru")} ₽-${maxPrice.toLocaleString("ru-Ru")} ₽`;
  };

  const formatTime = (time: string) => {
    const splittedTime = time.split(":");
    return `${splittedTime[0]} ч ${splittedTime[1]} мин`;
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
          <Link
            className="services-card__link"
            variant={index === 2 ? "dark" : undefined}
            href={href}
						openInNewWindow
          >
            Заказать
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServicesCard;
