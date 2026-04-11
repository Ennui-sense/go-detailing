import "./News.scss";

import { useState, useEffect } from "react";
import { useMediaQuery } from "~/hooks/useMediaQuery";

import Section from "~/layouts/Section/Section";
import NewsCard from "~/components/NewsCard/NewsCard";
import ArrowButton from "~/components/ArrowButton/ArrowButton";

import axios from "axios";

import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_STRAPI_URL
  : "http://localhost:1337";

const API_URL = `${BASE_URL}/api/vk-news?populate=*`;

import type { NewsItem } from "~/types";

interface NewsProps {
  withBottomMargin?: boolean;
}

const News = ({ withBottomMargin }: NewsProps) => {
  const [data, setData] = useState<NewsItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const isMobile = useMediaQuery("(max-width: 47.9375rem)");
  const isTablet = useMediaQuery("(max-width: 64rem)");

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get<{ result: NewsItem[] }>(API_URL);

        setData([
          ...res.data.result,
          ...res.data.result,
          ...res.data.result,
          ...res.data.result,
        ]);
      } catch (error) {
        console.error("Ошибка при получении данных:(", error);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, []);

	
  if (isLoading) {
		return <p>Загрузка новостей...</p>;
  }
	
  if (!data) {
		return <p>Данные не найдены</p>;
  }
	
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
          />
        )}

        <Swiper
          onSwiper={setSwiper}
          slidesPerView={slidesPerView}
          spaceBetween={isMobile ? 20 : 30}
          className="news__slider"
          modules={[Navigation]}
        >
          {data.map(({ id, text, photo, date, url }) => (
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
          />
        )}
      </div>
    </Section>
  );
};

export default News;
