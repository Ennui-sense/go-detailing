import "./News.scss";

import { useState } from "react";
import { useMediaQuery } from "~/hooks/useMediaQuery";

import Section from "~/layouts/Section/Section";
import NewsCard from "~/components/NewsCard/NewsCard";
import ArrowButton from "~/components/ArrowButton/ArrowButton";

import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

import type { NewsStrapiItem } from "~/api/types";

interface NewsProps {
  withBottomMargin?: boolean;
  data?: NewsStrapiItem[];
}

const News = ({ withBottomMargin, data }: NewsProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const isMobile = useMediaQuery("(max-width: 47.9375rem)");
  const isTablet = useMediaQuery("(max-width: 64rem)");

  const slidesPerView = isMobile ? 1.4 : isTablet ? 2 : 3;

  return (
    <Section
      title="Актуальное в нашем блоге"
      bodyClassName="news"
      withTopMargin
      withBottomMargin={withBottomMargin}
      withHeaderContainer
    >
      <div className="news__inner container">
        {!isMobile && (
          <ArrowButton
            directionArrow="left"
            onClick={() => swiper?.slidePrev()}
            className="news__swiper-button"
            variant="dark"
          />
        )}

        <Swiper
          onSwiper={setSwiper}
          slidesPerView={slidesPerView}
          spaceBetween={isMobile ? 20 : 30}
          className="news__slider"
          modules={[Navigation]}
        >
          {data?.map(({ id, text, photo, date, url }) => (
            <SwiperSlide className="news__item" key={id}>
              <NewsCard text={text} photo={photo} date={date} url={url} />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isMobile && (
          <ArrowButton
            directionArrow="right"
            onClick={() => swiper?.slideNext()}
            className="news__swiper-button"
            variant="dark"
          />
        )}
      </div>
    </Section>
  );
};

export default News;
