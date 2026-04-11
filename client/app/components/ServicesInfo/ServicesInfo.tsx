import "./ServicesInfo.scss";

import type { ServicesIncludedItem } from "~/types";

import clsx from "clsx";

interface ServicesInfoProps {
  includedItems: ServicesIncludedItem[];
  time?: number;
  border?: boolean;
  isSalonService: boolean;
  includedItemsOnBodywork?: ServicesIncludedItem[];
  includedItemsOnSalon?: ServicesIncludedItem[];
}

const ServicesInfo = ({
  time,
  isSalonService,
  border = false,
  includedItems,
  includedItemsOnBodywork,
  includedItemsOnSalon,
}: ServicesInfoProps) => {
  const formatTime = (time: number) => {
    return time % 60 === 0
      ? `${time / 60} ч`
      : `${Math.floor(time / 60)} ч ${time % 60} мин`;
  };

  return (
    <div className={clsx("services-info", { "services-info--border": border })}>
      <header className="services-info__header">
        Включает в себя:
        {time && <p className="services-info__time">{formatTime(time)}</p>}
      </header>

      <div className="services-info__content">
        {!isSalonService && (
          <p className="services-info__text">Всё из тарифа «Салон», а также:</p>
        )}

        {includedItems.length > 0 && (
          <ul className="services-info__list">
            {includedItems.map(({ id, label }) => (
              <li className="services-info__item" key={id}>
                {label}
              </li>
            ))}
          </ul>
        )}

        {includedItemsOnSalon && (
          <div className="services-info__salon">
            <p className="services-info__text services-info__text--italic">
              По салону:
            </p>
            <ul className="services-info__list">
              {includedItemsOnSalon.map(({ id, label }) => (
                <li className="services-info__item" key={id}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {includedItemsOnBodywork && (
          <div className="services-info__bodywork">
            <p className="services-info__text services-info__text--italic">
              По кузову:
            </p>
            <ul className="services-info__list">
              {includedItemsOnBodywork.map(({ id, label }) => (
                <li className="services-info__item" key={id}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesInfo;
