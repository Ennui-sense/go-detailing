import "./Brands.scss";

import { BrandsData } from "~/data/BrandsData";

import Section from "~/layouts/Section/Section";

const Brands = () => {
  const duplicateBrandsData = [...BrandsData, ...BrandsData];

  return (
    <Section className="brands" isMarquee title="Автомобили, с которыми мы работаем">
      <ul className="brands__list">
        {duplicateBrandsData.map(({ imageSrc, id }, index) => (
          <li className="brands__item" key={id - index}>
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
