import "./Cta.scss";

import Section from "~/layouts/Section/Section";
import Link from "~/components/Link/Link";

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
    >
      <div className="cta__body">
        <Link
          className="cta__link"
          href="https://n2056470.yclients.com/"
          openInNewWindow
        >
          Записаться
        </Link>
      </div>
    </Section>
  );
};

export default Cta;
