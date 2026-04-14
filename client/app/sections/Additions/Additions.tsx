import "./Additions.scss";

import Section from "~/layouts/Section/Section";
import Link from "~/components/Link/Link";
import AdditionsCard from "~/components/AdditionsCard/AdditionsCard";

import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "~/hooks/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";

import type { AdditionStrapi } from "~/api/types";

interface AdditionsProps {
  data: AdditionStrapi[];
}

const Additions = ({ data }: AdditionsProps) => {
  const [visibleCardDetailsId, setVisibleCardDetailsId] = useState<
    number | null
  >(null);

  const additionsListRef = useRef<HTMLUListElement>(null);
  const isMobile = useMediaQuery("(max-width: 47.9375rem)");

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

  const onClick = (id: number) => {
    setVisibleCardDetailsId(id === visibleCardDetailsId ? null : id);
  };

  return (
    <Section
      bodyClassName="additions"
      title="Добавьте к заказу"
      description="Ознакомьтесь с подробностями услуг, совершив всего один клик"
      withHeaderContainer
    >
      <div className="additions__inner container">
        {isMobile ? (
          <Swiper
            className="additions__swiper"
            spaceBetween={16}
            slidesPerView="auto"
          >
            {data.map(({ title, description, time, imageSrc, price, id }) => (
              <SwiperSlide key={id} className="additions__swiper-slide">
                <AdditionsCard
                  title={title}
                  description={description}
                  time={time}
                  imageSrc={imageSrc.url}
                  price={price}
                  onClick={() => onClick(id)}
                  visibleDetails={visibleCardDetailsId === id}
                  isMobile={isMobile}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className="additions__list" ref={additionsListRef}>
            {data.map(({ title, description, time, price, imageSrc, id }) => (
              <li className="additions__item" key={id}>
                <AdditionsCard
                  title={title}
                  description={description}
                  time={time}
                  imageSrc={imageSrc.url}
                  price={price}
                  onClick={() => onClick(id)}
                  visibleDetails={visibleCardDetailsId === id}
                />
              </li>
            ))}
          </ul>
        )}

        <Link
          className="additions__link"
          variant="dark"
          href="https://n2056470.yclients.com/"
					openInNewWindow
        >
          Оформить заказ
        </Link>
      </div>
    </Section>
  );
};

export default Additions;
