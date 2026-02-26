import "./Hero.scss";

import HeroImage from "~/assets/images/hero-img.jpg";

import Button from "~/components/Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src={HeroImage}
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

        <Button className="hero__button">Подробнее</Button>
      </div>
    </section>
  );
};

export default Hero;
