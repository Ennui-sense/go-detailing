import "./Reviews.scss";

import Section from "~/layouts/Section/Section";
import ReviewsCard from "~/components/ReviewsCard/ReviewsCard";
import Button from "~/components/Button/Button";

import { ReviewsCardsData } from "~/data/ReviewsCardsData";

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 47.9375rem)");

    const checkMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    checkMobile();

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Section
      title={
        <>
          Реальные истории{" "}
          <span className="section__title-accent">сияющих</span> авто
        </>
      }
      className="reviews"
    >
      <div className="reviews__inner">
        {isMobile ? (
          <Swiper
            slidesPerView={1.4}
						spaceBetween="20"
						className="reviews__slider"
          >
            {ReviewsCardsData.map(({ id, text, name, rate }) => (
              <SwiperSlide className="reviews__item" key={id}>
                <ReviewsCard
                  text={text}
                  name={name}
                  rate={rate}
                  className="reviews__card"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ul className="reviews__list">
            {ReviewsCardsData.map(({ id, text, name, rate }) => (
              <li className="reviews__item" key={id}>
                <ReviewsCard
                  text={text}
                  name={name}
                  rate={rate}
                  className="reviews__card"
                />
              </li>
            ))}
          </ul>
        )}

        <div className="reviews__buttons">
          <Button
            className="reviews__button button--phone"
            href="tel:+73422737107"
          >
            +7 (342) 27-37-107
          </Button>
          <Button className="reviews__button">Записаться</Button>
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
