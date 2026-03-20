import "./Additions.scss";

import { AdditionsCardsData } from "~/data/AdditionsCardsData";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";
import AdditionsCard from "~/components/AdditionsCard/AdditionsCard";

import { useState, useRef, useEffect } from "react";

const Additions = () => {
  const [visibleCardDetailsId, setVisibleCardDetailsId] = useState<
    number | null
  >(null);

  const onClick = (id: number) => {
    setVisibleCardDetailsId(id === visibleCardDetailsId ? null : id);
  };

  const additionsListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        additionsListRef.current &&
        !additionsListRef.current.contains(event.target as Node)
      ) {
        setVisibleCardDetailsId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [additionsListRef]);

  return (
    <Section
      className="additions"
      title="Добавьте к заказу"
      description="Ознакомьтесь с подробностями услуг, совершив всего один клик"
    >
      <div className="additions__inner">
        <ul className="additions__list" ref={additionsListRef}>
          {AdditionsCardsData.map((data) => (
            <li className="additions__item" key={data.id}>
              <AdditionsCard
                data={data}
                onClick={() => onClick(data.id)}
                visibleDetails={visibleCardDetailsId === data.id}
              />
            </li>
          ))}
        </ul>

        <Button className="additions__button" variant="dark">
          Оформить заказ
        </Button>
      </div>
    </Section>
  );
};

export default Additions;
