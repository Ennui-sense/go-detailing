import "./Hero.scss";

import HeroImageSrc from "~/assets/images/hero-img.jpg";
import HeroImageMobileSrc from "~/assets/images/hero-img-mobile.jpg";

import { useState, useEffect } from "react";

import Button from "~/components/Button/Button";

const Hero = () => {
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
    <section className="hero section">
      <div className="hero__bg">
        <img
          src={isMobile ? HeroImageMobileSrc : HeroImageSrc}
          alt="Наши работы"
          width={1920}
          height={824}
          className="hero__bg-image"
        />
      </div>

      <div className="hero__inner container">
        <h1 className="hero__title">
          Премиальный детейлинг <br />
          <span className="hero__title-accent">с выездом</span> к вашему
          автомобилю
        </h1>

        {isMobile && (
          <p className="hero__text">
            Восстановим блеск и защитим ваш автомобиль на высшем уровне.
            Профессиональная химия, опытные мастера и индивидуальный подход —
            прямо у вашего дома или офиса.
          </p>
        )}

        <Button className="hero__button">Записаться</Button>
      </div>
    </section>
  );
};

export default Hero;
