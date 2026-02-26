import "./Benefits.scss";

import Section from "~/layouts/Section/Section";
import BenefitsCard from "~/components/BenefitsCard/BenefitsCard";

import { BenefitsCardsData } from "~/data/BenefitsCardsdata";

const Benefits = () => {
  return (
    <Section className="benefits" title="Наши клиенты нам доверяют">
      <div className="benefits__inner container">
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
      </div>
    </Section>
  );
};

export default Benefits;
