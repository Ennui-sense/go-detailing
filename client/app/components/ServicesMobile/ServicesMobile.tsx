import "./ServicesMobile.scss";

import ServicesCard from "~/components/ServicesCard/ServicesCard";

import { ServicesCardsData } from "~/data/ServicesCardsData";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

const ServicesMobile = () => {
  const labelsOfServices = ServicesCardsData.map((item) => item.label);

  return (
    <div className="services-mobile">
      <div className="services-mobile__pagination"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        modules={[Pagination]}
        className="services-mobile__swiper"
        pagination={{
          el: ".services-mobile__pagination",
          type: "bullets",
          bulletClass: "services-mobile__pagination-button",
          bulletActiveClass: "services-mobile__pagination-button--active",
          clickable: true,
          renderBullet: (index, className) =>
            `<button class="${className}" type="button">${labelsOfServices[index]}</button>`,
        }}
      >
        {ServicesCardsData.map(
          ({
            label,
            value,
            description,
            maxPrice,
            minPrice,
            id,
            time,
            includedItems,
            includedItemsOnBodywork,
            includedItemsOnSalon,
            href,
          }) => (
            <SwiperSlide key={id} className="services-mobile__swiper-slide">
              <ServicesCard
                time={time}
                label={label}
                value={value}
                description={description}
                maxPrice={maxPrice}
                minPrice={minPrice}
                includedItems={includedItems}
                includedItemsOnBodywork={includedItemsOnBodywork}
                includedItemsOnSalon={includedItemsOnSalon}
                id={id}
                href={href}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default ServicesMobile;
