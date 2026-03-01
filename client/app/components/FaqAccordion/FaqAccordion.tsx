import "./FaqAccordion.scss";

import clsx from "clsx";

import { useRef } from "react";

interface FaqAccordionProps {
  title: string;
  text: string;
  onClick: () => void;
  isOpen: boolean;
}

const FaqAccordion = ({ title, text, onClick, isOpen }: FaqAccordionProps) => {
  const accordionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={clsx("faq-accordion", isOpen && "faq-accordion--open")}>
      <button
        className="faq-accordion__header"
        type="button"
        onClick={() => onClick()}
      >
        {title}
      </button>
      <div
        className={clsx(
          "faq-accordion__collapse",
          isOpen && "faq-accordion__collapse--open",
        )}
        style={
          isOpen
            ? { height: accordionRef.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="faq-accordion__body" ref={accordionRef}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
