import "./Faq.scss";

import Section from "~/layouts/Section/Section";
import FaqAccordion from "~/components/FaqAccordion/FaqAccordion";

import { FaqAccordionsData } from "~/data/FaqAccordionsData";

import { useState } from "react";

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Section title="Часто задаваемые вопросы" className="faq" isRow>
      <ul className="faq__list">
        {FaqAccordionsData.map(({ id, text, title }) => (
          <li className="faq__item" key={id}>
            <FaqAccordion
              text={text}
              title={title}
              onClick={() => (openId === id ? setOpenId(null) : setOpenId(id))}
              isOpen={openId === id}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Faq;
