import "./ServicesInfo.scss";

import type { IIncludedItem } from "~/data/ServicesCardsData";

import ServicesInfoItem from "../ServicesInfoItem/ServicesInfoItem";

interface ServicesInfoProps {
  time: number;
  includedItems: IIncludedItem[];
}

const ServicesInfo = ({ time, includedItems }: ServicesInfoProps) => {
  const formatTime = (time: number) => {
    return time % 60 === 0
      ? `${time / 60} ч`
      : `${Math.floor(time / 60)} ч ${time % 60} мин`;
  };

  return (
    <div className="services-info">
      <header className="services-info__header">
        Включает в себя
        <p className="services-info__time">{formatTime(time)}</p>
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
