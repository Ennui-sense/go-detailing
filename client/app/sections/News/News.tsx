import "./News.scss";

import { useState, useEffect } from "react";

import Section from "~/layouts/Section/Section";
import NewsCard from "~/components/NewsCard/NewsCard";
import ArrowButton from "~/components/ArrowButton/ArrowButton";

import axios from "axios";

import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_STRAPI_URL
  : "http://localhost:1337";

const API_URL = `${BASE_URL}/api/vk-news?populate=*`;

type NewsItem = {
  id: number;
  text: string;
  photo: string;
  date: number;
  url: string;
};

const News = () => {
  const [data, setData] = useState<NewsItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

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

  const slidesPerView = isMobile ? 1.4 : isTablet ? 2 : 3;

  if (isLoading) {
    return <p>Загрузка новосткей...</p>;
  }

  if (!data) {
    return <p>Данные не найдены</p>;
  }

  return (
    <Section
      title="Актуальное в нашем блоге"
      className="news"
      marginTop
      isMobileSlider
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
