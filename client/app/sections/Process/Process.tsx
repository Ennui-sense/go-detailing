import "./Process.scss";

import Section from "~/layouts/Section/Section";
import Button from "~/components/Button/Button";

const Process = () => {
  return (
    <Section bodyClassName="process" title="Сервис выезда" align="left">
      <div className="process__inner">
        <div className="process__body">
          <p className="process__text">
            Мы работаем по всей Перми. Наши специалисты приезжают для выполнения
            необходимых работ на указанный вами адрес
          </p>
          <p className="process__text">
            Такой подход позволяет обеспечить удобство для наших клиентов,
            сэкономить их время и оперативно решить возникшие проблемы. Уточнить
            детали заказа и стоимость услуги можно по телефону или через
            онлайн-заявку.
          </p>
        </div>

				<div className="process__action">
					<p className="process__action-text">Заполните форму и мы свяжемся с вами!</p>
					<Button className="process__action0-">Заполнить</Button>
				</div>
      </div>
    </Section>
  );
};

export default Process;
