import clsx from "clsx";

import "./ServicesAccordion.scss";

import { useState, useEffect, useRef } from "react";

interface ServicesAccordionProps {
  label: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const ServicesAccordion = ({
  label,
  maxPrice,
  minPrice,
  description,
  isActive,
  onClick,
}: ServicesAccordionProps) => {
	const [contentHeight, setContentHeight] = useState<number>(0);
	const accordionRef = useRef<HTMLDivElement | null>(null);

  const formatPrice = (minPrice: number, maxPrice: number) => {
    return `от ${minPrice.toLocaleString("ru-Ru")} ₽-${maxPrice.toLocaleString("ru-Ru")} ₽`;
  };

	useEffect(() => {
		if (accordionRef.current) {
			setContentHeight(accordionRef.current.scrollHeight)
		}
	}, [description])


  return (
    <div
      className={clsx("services-accordion", {
        "services-accordion--active": isActive,
      })}
    >
      <header className="services-accordion__header">
        <button
          type="button"
          className="services-accordion__button"
          onClick={onClick}
        >
          {label}
        </button>

        <p className="services-accordion__price">
          {formatPrice(minPrice, maxPrice)}
        </p>
      </header>

      <div
        className="services-accordion__collapse"
        style={{height: isActive ? `${contentHeight}px` : "0px" }}
      >
        <div className="services-accordion__body" ref={accordionRef}>
          <p className="services-accordion__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
