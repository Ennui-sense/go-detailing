import "./Reviews.scss";

import Section from "~/layouts/Section/Section";
import ReviewsCard from "~/components/ReviewsCard/ReviewsCard";
import Button from "~/components/Button/Button";
import ArrowButton from "~/components/ArrowButton/ArrowButton";

import { ReviewsCardsData } from "~/data/ReviewsCardsData";

import { useState } from "react";
import { useMediaQuery } from "~/hooks/useMediaQuery";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Reviews = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const isMobile = useMediaQuery("(max-width: 47.9375rem)");
  const isTablet = useMediaQuery("(max-width: 64rem)");

  let slidesPerView = 3;
  let spaceBetween = 30;

  if (isMobile) {
    slidesPerView = 1.4;
    spaceBetween = 12;
  } else if (isTablet) {
    slidesPerView = 2;
    spaceBetween = 20;
  }

  return (
    <Section
      title={
        <>
          Реальные истории{" "}
          <span className="section__title-accent">сияющих</span> авто
        </>
      }
      className="reviews"
      isMobileSlider
    >
      <div className="reviews__inner container">
        <div className="reviews__body">
          {!isMobile && (
            <ArrowButton
              directionArrow="left"
              onClick={() => swiper?.slidePrev()}
              className="reviews__swiper-button"
            />
          )}

          <Swiper
            onSwiper={setSwiper}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
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

          {!isMobile && (
            <ArrowButton
              directionArrow="right"
              onClick={() => swiper?.slideNext()}
              className="reviews__swiper-button"
            />
          )}
        </div>

        <div className="reviews__buttons">
          <Button
            className="reviews__button"
            href="tel:+73422737107"
            isPhoneButton
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
