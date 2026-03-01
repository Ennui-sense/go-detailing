import "./Steps.scss";

import Section from "~/layouts/Section/Section";
import StepsCard from "~/components/StepsCard/StepsCard";

import { StepsCardsData } from "~/data/StepsCardsData";

const Steps = () => {
  return (
    <Section title="Порядок выполнения работ" className="steps">
      <ol className="steps__list">
        {StepsCardsData.map(({ id, Icon, title, description }) => (
          <li className="steps__item" key={id}>
            <StepsCard Icon={Icon} title={title} description={description} />
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Steps;
