import "./Benefits.scss";

import Section from "~/layouts/Section/Section";
import BenefitsCard from "~/components/BenefitsCard/BenefitsCard";

import { BenefitsCardsData } from "~/data/BenefitsCardsData";

const Benefits = () => {
  return (
    <Section className="benefits" title="Наши клиенты нам доверяют">
      <ul className="benefits__list">
        {BenefitsCardsData.map(({ id, label }, index) => (
          <li className="benefits__item" key={id}>
            <BenefitsCard
              label={label}
              index={index + 1}
              className="benefits__card"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Benefits;
