import "./ServicesInfo.scss";

import type { ServiceStrapiItem } from "~/api/types";

import clsx from "clsx";

interface ServicesInfoProps {
  includedItems: ServiceStrapiItem[];
  time?: string;
  border?: boolean;
  isSalonService: boolean;
  includedItemsOnBodywork: ServiceStrapiItem[];
  includedItemsOnSalon: ServiceStrapiItem[];
}

const ServicesInfo = ({
  time,
  isSalonService,
  border = false,
  includedItems,
  includedItemsOnBodywork,
  includedItemsOnSalon,
}: ServicesInfoProps) => {
  const formatTime = (time: string) => {
    const splittedTime = time.split(":");
    const hours = Number(splittedTime[0]);
    const minutes = Number(splittedTime[1]);

    if (!hours) {
      return `${minutes} мин`;
    } else if (!minutes) {
      return `${hours} ч`;
    }

    return `${hours} ч ${minutes} мин`;
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

        {includedItemsOnSalon.length > 0 && (
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

        {includedItemsOnBodywork.length > 0 && (
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
