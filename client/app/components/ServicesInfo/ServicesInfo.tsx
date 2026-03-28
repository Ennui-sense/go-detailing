import "./ServicesInfo.scss";

import type { IIncludedItem } from "~/data/ServicesCardsData";

import ServicesInfoItem from "../ServicesInfoItem/ServicesInfoItem";
import clsx from "clsx";

interface ServicesInfoProps {
  time?: number;
  includedItems: IIncludedItem[];
  border?: boolean;
}

const ServicesInfo = ({
  time,
  includedItems,
  border = false,
}: ServicesInfoProps) => {
  const formatTime = (time: number) => {
    return time % 60 === 0
      ? `${time / 60} ч`
      : `${Math.floor(time / 60)} ч ${time % 60} мин`;
  };

  return (
    <div className={clsx("services-info", { "services-info--border": border })}>
      <header className="services-info__header">
        Включает в себя
        {time && <p className="services-info__time">{formatTime(time)}</p>}
      </header>

      <ul className="services-info__list">
        {includedItems.map(({ id, label, italic, marker }) => (
          <li className="services-info__item" key={id}>
            <ServicesInfoItem label={label} italic={italic} marker={marker} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesInfo;
