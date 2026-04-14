import "./Comparison.scss";

import Section from "~/layouts/Section/Section";
import ComparisonImageSrc from "~/assets/images/comparison-image.png";
import ComparisonCard from "~/components/ComparisonCard/ComparisonCard";

import type { ComparisonStrapi } from "~/api/types";
import { STRAPI_BASE_URL } from "~/api/strapi";


interface ComparisonProps {
	data: ComparisonStrapi[]
}

const Comparison = ({data}: ComparisonProps) => {
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
          {data.map(({ id, title, comparison_items, image }, index) => (
            <li className="comparison__item" key={id}>
              <ComparisonCard
                title={title}
                items={comparison_items}
                imageSrc={`${STRAPI_BASE_URL}${image.url}`}
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
