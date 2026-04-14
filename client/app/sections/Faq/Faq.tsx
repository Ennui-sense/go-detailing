import "./Faq.scss";

import Section from "~/layouts/Section/Section";
import FaqAccordion from "~/components/FaqAccordion/FaqAccordion";

import { useState } from "react";

import type { FaqStrapi } from "~/api/types";

interface FaqProps {
	data: FaqStrapi[]
}

const Faq = ({data}: FaqProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Section
      title={"Часто задаваемые вопросы"}
      bodyClassName="faq"
      innerLayout="row"
    >
      <ul className="faq__list">
        {data.map(({ id, question, answer }) => (
          <li className="faq__item" key={id}>
            <FaqAccordion
              text={answer}
              title={question}
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
