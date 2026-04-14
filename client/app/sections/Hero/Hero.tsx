import "./Hero.scss";

import HeroImageSrc from "~/assets/images/hero-img.jpg";
import HeroImageMobileSrc from "~/assets/images/hero-img-mobile.jpg";

import Link from "~/components/Link/Link";

import { useMediaQuery } from "~/hooks/useMediaQuery";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 47.9375rem)");

  return (
    <section className="hero section">
      <picture className="hero__bg">
				<source media="(max-width: 47.9375rem)" src={HeroImageMobileSrc}/>
        <img
          src={HeroImageSrc}
          alt=""
          width={1920}
          height={824}
          className="hero__bg-image"
        />
      </picture>

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

        <Link
          className="hero__link"
          href="#services"
        >
          Выбрать тариф
        </Link>
      </div>
    </section>
  );
};

export default Hero;
