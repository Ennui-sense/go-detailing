import "./Brands.scss";

import { BrandsData } from "~/data/BrandsData";

import Section from "~/layouts/Section/Section";

const Brands = () => {
  const marqueeBrands = [...BrandsData, ...BrandsData];

  return (
    <Section
      bodyClassName="brands"
      title="Автомобили, с которыми мы работаем"
      titleHidden
    >
      <ul className="brands__list">
        {marqueeBrands.map(({ imageSrc, id }, index) => (
          <li className="brands__item" key={`${id}-${index}`}>
            <img
              src={imageSrc}
              alt=""
              className="brands__image"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Brands;
