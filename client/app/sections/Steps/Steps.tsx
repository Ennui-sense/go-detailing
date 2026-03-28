import "./Steps.scss";

import Section from "~/layouts/Section/Section";
import StepsCard from "~/components/StepsCard/StepsCard";

import { StepsCardsData } from "~/data/StepsCardsData";

const Steps = () => {
  return (
    <Section title="Порядок выполнения работ" className="steps" marginTop>
      <ol className="steps__list">
        {StepsCardsData.map(({ id, Icon, title, description }, index) => (
          <li
            className={`steps__item ${index % 2 === 0 ? "steps__item--right" : "steps__item--left"}`}
            key={id}
          >
            <StepsCard Icon={Icon} title={title} description={description} />
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Steps;