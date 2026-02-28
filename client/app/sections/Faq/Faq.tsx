import "./Faq.scss";

import Section from "~/layouts/Section/Section";
import FaqCard from "~/components/FaqCard/FaqCard";

import { FaqCardsData } from "~/data/FaqCardsData";

const Faq = () => {
  return (
    <Section title="Часто задаваемые вопросы" className="faq" isRow>
      <div className="faq__inner">
        <ul className="faq__list">
          {FaqCardsData.map(({ id, text, title }) => (
            <li className="faq__item" key={id}>
              <FaqCard text={text} title={title} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Faq;
