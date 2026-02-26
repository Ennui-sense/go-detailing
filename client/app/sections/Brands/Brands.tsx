import "./Brands.scss";

import { BrandsData } from "~/data/BrandsData";

import Section from "~/layouts/Section/Section";

const Brands = () => {
  const duplicateBrandsData = [...BrandsData, ...BrandsData, ...BrandsData];

  return (
    <Section className="brands">
      <ul className="brands__list">
        {duplicateBrandsData.map(({ imageSrc, id }) => (
          <li className="brands__item" key={id}>
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
