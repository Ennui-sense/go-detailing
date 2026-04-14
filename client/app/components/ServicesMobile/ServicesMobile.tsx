import "./ServicesMobile.scss";

import ServicesCard from "~/components/ServicesCard/ServicesCard";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import type { ServiceStrapi } from "~/api/types";

interface ServicesMobileProps {
  data: ServiceStrapi[];
}

const ServicesMobile = ({ data }: ServicesMobileProps) => {
  const labelsOfServices = data.map((item) => item.title);

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
        {data.map(
          ({
            title,
            value,
            description,
            maxPrice,
            minPrice,
            id,
            time,
            base_items,
            bodywork_items,
            salon_items,
            href,
          }, index) => (
            <SwiperSlide key={id} className="services-mobile__swiper-slide">
              <ServicesCard
                time={time}
                label={title}
                value={value}
                description={description}
                maxPrice={Number(maxPrice)}
                minPrice={Number(minPrice)}
                includedItems={base_items}
                includedItemsOnBodywork={bodywork_items}
                includedItemsOnSalon={salon_items}
                href={href}
								index={index + 1}
              />
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default ServicesMobile;
