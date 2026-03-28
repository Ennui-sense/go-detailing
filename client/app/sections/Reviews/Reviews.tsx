import "./Reviews.scss";

import Section from "~/layouts/Section/Section";
import ReviewsCard from "~/components/ReviewsCard/ReviewsCard";
import Button from "~/components/Button/Button";
import ArrowButton from "~/components/ArrowButton/ArrowButton";

import { ReviewsCardsData } from "~/data/ReviewsCardsData";

import { useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const Reviews = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 47.9375rem)");
    const tabletQuery = window.matchMedia("(max-width: 64rem)");

    const checkMobile = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    checkMobile();

    mobileQuery.addEventListener("change", checkMobile);
    tabletQuery.addEventListener("change", checkMobile);

		
    return () => {
			mobileQuery.removeEventListener("change", checkMobile);
      tabletQuery.removeEventListener("change", checkMobile);
    };
  }, []);

  const slidesPerView = isMobile ? 1.4 : isTablet ? 2 : 3

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
            spaceBetween={isMobile ? 12 : isTablet ? 20 : 30}
            className="reviews__slider"
            modules={[Navigation]}
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
