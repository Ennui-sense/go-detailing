import "./About.scss";

import Section from "~/layouts/Section/Section";

import FirstImageSrc from "~/assets/images/about/1.jpg";
import SecondImageSrc from "~/assets/images/about/2.jpg";
import ThirdImageSrc from "~/assets/images/about/3.jpg";

interface AboutProps {
  isHero?: boolean;
}

const imagesSrc = [FirstImageSrc, SecondImageSrc, ThirdImageSrc];

const About = ({ isHero }: AboutProps) => {
  return (
    <Section title="О компании" className="about" isHero={isHero}>
      <div className="about__inner">
        <p className="about__text">
          <span className="about__text-accent">GO detailing</span> — премиальный
          мобильный детейлинг с профессиональным уходом за автомобилем. Мы
          приезжаем к вам домой или в офис, экономя ваше время без компромиссов
          в качестве. В спектр услуг входит профессиональная мойка, глубокая
          чистка салона, полировка, защита кузова и уход за кожей — всё на
          высшем уровне и с заботой о каждой детали.
        </p>

        <div className="about__images">
          {imagesSrc.map((src) => (
            <img
              src={src}
              alt=""
              className="about__image"
              width={490}
              height={360}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
