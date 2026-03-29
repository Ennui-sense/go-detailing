import "./Additions.scss";

import { AdditionsCardsData } from "~/data/AdditionsCardsData";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";
import AdditionsCard from "~/components/AdditionsCard/AdditionsCard";

import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const Additions = () => {
  const [visibleCardDetailsId, setVisibleCardDetailsId] = useState<
    number | null
  >(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [additionsListRef]);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 47.9375rem");

    const handleChange = () => {
      setIsMobile(mobileMedia.matches);
    };

    handleChange();

    mobileMedia.addEventListener("change", handleChange);

    return () => mobileMedia.removeEventListener("change", handleChange);
  }, []);

  const onClick = (id: number) => {
    setVisibleCardDetailsId(id === visibleCardDetailsId ? null : id);
  };

  return (
    <Section
      className="additions"
      title="Добавьте к заказу"
      description="Ознакомьтесь с подробностями услуг, совершив всего один клик"
			isMobileSlider
    >
      <div className="additions__inner container">
        {isMobile ? (
          <Swiper className="additions__swiper" spaceBetween={16} slidesPerView={1.4}>
            {AdditionsCardsData.map((data) => (
              <SwiperSlide key={data.id}>
                <AdditionsCard
                  data={data}
                  onClick={() => onClick(data.id)}
                  visibleDetails={visibleCardDetailsId === data.id}
									isMobile={isMobile}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
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
        )}

        <Button className="additions__button" variant="dark">
          Оформить заказ
        </Button>
      </div>
    </Section>
  );
};

export default Additions;
