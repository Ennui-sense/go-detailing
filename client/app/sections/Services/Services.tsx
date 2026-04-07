import "./Services.scss";

import Section from "~/layouts/Section/Section";
import ServicesAccordion from "~/components/ServicesAccordion/ServicesAccordion";
import ServicesInfo from "~/components/ServicesInfo/ServicesInfo";
import ServicesCard from "~/components/ServicesCard/ServicesCard";
import Button from "~/components/Button/Button";

import { ServicesCardsData } from "~/data/ServicesCardsData";

import { useState, useEffect } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import { motion } from "motion/react";

import "swiper/swiper-bundle.css"

interface ServicesProps {
  isHero?: boolean;
}

const Services = ({ isHero }: ServicesProps) => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 64rem)");

    const handleChange = () => {
      setIsTablet(tabletQuery.matches);
    };

    handleChange();

    tabletQuery.addEventListener("change", handleChange);

    return () => tabletQuery.removeEventListener("change", handleChange);
  }, []);

  const titlesOfServices = ServicesCardsData.map((item) => item.title);

  const handleClick = (id: number) => {
    setActiveId(id === activeId ? activeId : id);
  };

  const { includedItems, time, href } = ServicesCardsData.filter(
    ({ id }) => id === activeId,
  )[0];

  return (
    <Section title="Комплексный подход" className="services" isHero={isHero}>
      {!isTablet ? (
        <div className="services__inner">
          <div className="services__accordions">
            {ServicesCardsData.map(
              ({ title, description, maxPrice, minPrice, id }) => (
                <ServicesAccordion
                  title={title}
                  description={description}
                  maxPrice={maxPrice}
                  minPrice={minPrice}
                  isActive={id === activeId}
                  key={id}
                  onClick={() => handleClick(id)}
                />
              ),
            )}
          </div>
          <div className="services__body">
            <ServicesInfo time={time} includedItems={includedItems} border />

            <motion.div
              initial={{ opacity: 0, x: 100 }} // Начальное состояние (до появления)
              whileInView={{ opacity: 1, x: 0 }} // Состояние при попадании в поле видимости
              transition={{ duration: 1 }} // Настройки анимации
              viewport={{ once: false }} // Анимировать только один раз (или false, чтобы каждый раз)
            >
              <Button className="services__button" href={href}>
                Уточнить детали
              </Button>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="services__inner">
          <div className="services__pagination"></div>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            modules={[Pagination]}
            className="services__swiper"
            pagination={{
              el: ".services__pagination",
              type: "bullets",
              bulletClass: "services__pagination-button",
              bulletActiveClass: "services__pagination-button--active",
              clickable: true,
              renderBullet: (index, className) =>
                `<button class="${className}" type="button">${titlesOfServices[index]}</button>`,
            }}
          >
            {ServicesCardsData.map(
              ({
                title,
                description,
                maxPrice,
                minPrice,
                id,
                time,
                includedItems,
								href
              }) => (
                <SwiperSlide key={id} className="services__swiper-slide">
                  <ServicesCard
                    time={time}
                    title={title}
                    description={description}
                    maxPrice={maxPrice}
                    minPrice={minPrice}
                    includedItems={includedItems}
                    id={id}
										href={href}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      )}
    </Section>
  );
};

export default Services;
