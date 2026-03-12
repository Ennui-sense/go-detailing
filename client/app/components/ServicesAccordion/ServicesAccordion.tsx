import clsx from "clsx";

import "./ServicesAccordion.scss";

import { useRef } from "react";

interface ServicesAccordionProps {
  title: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const ServicesAccordion = ({
  title,
  maxPrice,
  minPrice,
  description,
  isActive,
  onClick,
}: ServicesAccordionProps) => {
  const formatPrice = (minPrice: number, maxPrice: number) => {
    return `от ${minPrice.toLocaleString("ru-Ru")} ₽-${maxPrice.toLocaleString("ru-Ru")} ₽`;
  };

  const accordionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={clsx("services-accordion", { active: isActive })}>
      <header className="services-accordion__header">
        <button
          type="button"
          className="services-accordion__button"
          onClick={onClick}
        >
          {title}
        </button>

        <p className="services-accordion__price">
          {formatPrice(minPrice, maxPrice)}
        </p>
      </header>

      <div
        className="services-accordion__collapse"
        style={
          isActive
            ? { height: accordionRef.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="services-accordion__body" ref={accordionRef}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
