import "./Comparison.scss";

import Section from "~/layouts/Section/Section";
import { ComparisonCardsData } from "~/data/ComparisonCardsData";
import clsx from "clsx";
import ComparisonImageSrc from "~/assets/images/comparison-image.png";
import ComparisonCard from "~/components/ComparisonCard/ComparisonCard";

const Comparison = () => {
  return (
    <Section
      bodyClassName="comparison"
      title="Сравнение сервисов"
      titleHidden
      withTopMargin
			withoutBottomMargin
    >
      <div className="comparison__inner">
        <ol className="comparison__list">
          {ComparisonCardsData.map(({ id, title, items, imageSrc }, index) => (
            <li className="comparison__item" key={id}>
              <ComparisonCard
                title={title}
                items={items}
                imageSrc={imageSrc}
                index={index + 1}
                reversed={(index + 1) % 2 === 0}
              />
            </li>
          ))}
        </ol>
      </div>
			
      <img
        src={ComparisonImageSrc}
        alt=""
        className="comparison__image"
        width={300}
        height={2000}
      />
    </Section>
  );
};

export default Comparison;
