import "./Steps.scss";

import Section from "~/layouts/Section/Section";
import StepsCard from "~/components/StepsCard/StepsCard";

import { StepsCardsData } from "~/data/StepsCardsData";
import clsx from "clsx";

const Steps = () => {
  return (
    <Section title="Порядок выполнения работ" bodyClassName="steps" withTopMargin>
      <ol className="steps__list">
        {StepsCardsData.map(({ id, Icon, title, description }, index) => (
          <li
            className={clsx(`steps__item`, {
              "steps__item--right": index % 2 === 0,
              "steps__item--left": index % 2 !== 0,
            })}
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
