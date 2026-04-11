import "./ServicesDesktop.scss";

import ServicesAccordion from "~/components/ServicesAccordion/ServicesAccordion";
import ServicesInfo from "~/components/ServicesInfo/ServicesInfo";
import Button from "~/components/Button/Button";

import { useState } from "react";

import type { ServicesCard } from "~/types";

import { ServicesCardsData } from "~/data/ServicesCardsData";

import { motion } from "motion/react";

const ServicesDesktop = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveId(id);
  };

  const activeServicesCard = ServicesCardsData.find(
    ({ id }) => id === activeId,
  ) as ServicesCard;

  return (
    <div className="services-desktop">
      <div className="services-desktop__accordions">
        {ServicesCardsData.map(
          ({ label, description, maxPrice, minPrice, id }) => (
            <ServicesAccordion
              label={label}
              description={description}
              maxPrice={maxPrice}
              minPrice={minPrice}
              isActive={id === activeId}
              key={id}
              onClick={() => handleClick(id)}
            />
          ),
        )}
      </div>
      <div className="services-desktop__body">
        <ServicesInfo
          time={activeServicesCard.time}
          includedItems={activeServicesCard.includedItems}
          includedItemsOnBodywork={activeServicesCard.includedItemsOnBodywork}
          includedItemsOnSalon={activeServicesCard.includedItemsOnSalon}
          border
          isSalonService={activeServicesCard.value === "salon"}
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }} // Начальное состояние (до появления)
          whileInView={{ opacity: 1, x: 0 }} // Состояние при попадании в поле видимости
          transition={{ duration: 1 }} // Настройки анимации
          viewport={{ once: false }} // Анимировать только один раз (или false, чтобы каждый раз)
        >
          <Button
            className="services-desktop__button"
            href={activeServicesCard.href}
          >
            Уточнить детали
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesDesktop;
