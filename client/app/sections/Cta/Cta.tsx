import "./Cta.scss";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";

const Cta = () => {
  return (
    <Section
      className="cta"
      title={
        <>
          Хотите привести
          <br />
          ваш автомобиль
          <br />в <span className="section__title-accent">идеальное</span>{" "}
          состояние?
        </>
      }
      isRow
      description="Заполните форму и мы свяжемся с вами!"
    >
      <div className="cta__body">
        <Button className="cta__button">Заполнить</Button>
        <p className="cta__text">
          Нажимая «Заказать», вы соглашаетесь с обработкой персональных данных
        </p>
      </div>
    </Section>
  );
};

export default Cta;
