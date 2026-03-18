import "./Additions.scss";

import { AdditionsCardsData } from "~/data/AdditionsCardsData";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";
import AdditionsCard from "~/components/AdditionsCard/AdditionsCard";

import { useState } from "react";

const Additions = () => {
  const [visibleCardDetailsId, setVisibleCardDetailsId] = useState<
    number | null
  >(null);

  const onMouseEnter = (id: number) => {
    setVisibleCardDetailsId(id);
  };

  const onMouseLeave = () => {
    setVisibleCardDetailsId(null);
  };

  return (
    <Section className="additions" title="Добавьте к заказу" description="Ознакомьтесь с подробностями услуг, совершив всего один клик">
      <div className="additions__inner">
        <ul className="additions__list">
          {AdditionsCardsData.map((data) => (
            <li className="additions__item" key={data.id}>
              <AdditionsCard
                data={data}
                onMouseEnter={() => onMouseEnter(data.id)}
                onMouseLeave={() => onMouseLeave()}
                visibleDetails={data.id === visibleCardDetailsId}
              />
            </li>
          ))}
        </ul>

        <Button className="additions__button" variant="dark">Оформить заказ</Button>
      </div>
    </Section>
  );
};

export default Additions;
