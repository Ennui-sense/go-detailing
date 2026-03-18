import "./Services.scss";

import Section from "~/layouts/Section/Section";
import ServicesAccordion from "~/components/ServicesAccordion/ServicesAccordion";
import ServicesInfo from "~/components/ServicesInfo/ServicesInfo";
import Button from "~/components/Button/Button";

import { ServicesCardsData } from "~/data/ServicesCardsData";

import { useState } from "react";

interface ServicesProps {
  isHero?: boolean;
}

const Services = ({ isHero }: ServicesProps) => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveId(id === activeId ? activeId : id);
  };

  const { includedItems, id, time } = ServicesCardsData.filter(
    ({ id }) => id === activeId,
  )[0];

  return (
    <Section title="Комплексный подход" className="services" isHero>
      <div className="services__inner">
        <div className="services__accordions">
          {ServicesCardsData.map(
            ({ title, description, maxPrice, minPrice, id }) => (
              <ServicesAccordion
                title={title}
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
        <div className="services__body">
          <ServicesInfo time={time} includedItems={includedItems} key={id} />
          <Button className="services__button">Уточнить детали</Button>
        </div>
      </div>
    </Section>
  );
};

export default Services;
