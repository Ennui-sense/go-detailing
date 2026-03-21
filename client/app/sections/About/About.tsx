import "./About.scss";

import Section from "~/layouts/Section/Section";

interface AboutProps {
  isHero?: boolean;
}

const About = ({ isHero }: AboutProps) => {
  return (
    <Section title="О компании" className="about" isHero={isHero}>
      <div className="about__inner">
        <p className="about__text">
          <span className="about__text-accent">GO detailing</span> — премиальный мобильный детейлинг с профессиональным
          уходом за автомобилем. Мы приезжаем к вам домой или в офис, экономя
          ваше время без компромиссов в качестве. В спектр услуг входит
          профессиональная мойка, глубокая чистка салона, полировка, защита
          кузова и уход за кожей — всё на высшем уровне и с заботой о каждой
          детали.
        </p>

				эволюция нана банан 3 картинки
      </div>
    </Section>
  );
};

export default About;
