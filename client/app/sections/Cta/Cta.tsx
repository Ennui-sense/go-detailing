import "./Cta.scss";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";

const Cta = () => {
  return (
    <Section
      bodyClassName="cta"
      title={
        <>
          Хотите привести
          <br />
          ваш автомобиль
          <br />в <span className="section__title-accent">идеальное</span>{" "}
          состояние?
        </>
      }
      innerLayout="row"
      description="Заполните форму и мы свяжемся с вами!"
    >
      <div className="cta__body">
        <Button className="cta__button">Заполнить</Button>
      </div>
    </Section>
  );
};

export default Cta;
