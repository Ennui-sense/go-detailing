import "./ServicesDesktop.scss";

import ServicesAccordion from "~/components/ServicesAccordion/ServicesAccordion";
import ServicesInfo from "~/components/ServicesInfo/ServicesInfo";
import Link from "../Link/Link";

import { useState } from "react";

import { motion } from "motion/react";

import type { ServiceStrapi } from "~/api/types";

interface ServicesDesktopProps {
	data: ServiceStrapi[]
}

const ServicesDesktop = ({data}: ServicesDesktopProps) => {
  const [activeId, setActiveId] = useState<number>(data[0].id);

  const handleClick = (id: number) => {
    setActiveId(id);
  };

  const activeServicesCard = data.find(
    ({ id }) => id === activeId,
  ) as ServiceStrapi; 

  return (
    <div className="services-desktop">
      <div className="services-desktop__accordions">
        {data.map(
          ({ title, description, maxPrice, minPrice, id }) => (
            <ServicesAccordion
              label={title}
              description={description}
              maxPrice={Number(maxPrice)}
              minPrice={Number(minPrice)}
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
          includedItems={activeServicesCard.base_items}
          includedItemsOnBodywork={activeServicesCard.bodywork_items}
          includedItemsOnSalon={activeServicesCard.salon_items}
          border
          isSalonService={activeServicesCard.value === "salon"}
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }} // Начальное состояние (до появления)
          whileInView={{ opacity: 1, x: 0 }} // Состояние при попадании в поле видимости
          transition={{ duration: 1 }} // Настройки анимации
          viewport={{ once: false }} // Анимировать только один раз (или false, чтобы каждый раз)
        >
          <Link
            className="services-desktop__link"
            href={activeServicesCard.href}
						openInNewWindow
          >
            Уточнить детали
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesDesktop;
