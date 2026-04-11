import "./About.scss";

import Section from "~/layouts/Section/Section";

interface AboutProps {
  heroOffset?: boolean;
}

const About = ({ heroOffset }: AboutProps) => {
  return (
    <Section
      title={
        <>
          <span className="section__title-accent">GO detailing</span> — это
          эволюция детейлинга
        </>
      }
      bodyClassName="about"
      heroOffset={heroOffset}
    >
      <div className="about__inner">
        <p className="about__text">
          Мы ценим ваше время, поэтому привозим сервис высшего класса прямо к
          вашему дому или офису.
        </p>
        <p className="about__text">
          Никаких очередей и компромиссов: только профессиональный подход,
          глубокая чистка салона, полировка и надежная защита кузова. Возвращаем
          автомобилю безупречный вид с заботой о каждой детали.
        </p>
      </div>
    </Section>
  );
};

export default About;
