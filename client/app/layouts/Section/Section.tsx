import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title: ReactNode;
  className: string;
  children: ReactNode;
  description?: string;
  isRow?: boolean;
  isMarquee?: boolean;
  marginTop?: boolean;
  hiddenTitle?: boolean;
  isHero?: boolean;
	isHeaderCenter?: boolean
}

const Section = ({
  title,
  description,
  className,
  children,
  marginTop = false,
  isRow = false,
  isMarquee = false,
  hiddenTitle = false,
  isHero = false,
}: SectionProps) => {
  return (
    <section className="section">
      <div
        className={clsx("section__inner", {
          container: !isMarquee,
          "section__inner--row": isRow,
          "section__inner--marquee": isMarquee,
          "section__inner--hero": isHero,
        })}
      >
        <header
          className={clsx("section__header", {
            "section__header--margin-top": marginTop,
            "visually-hidden": hiddenTitle,
          })}
        >
          <h2 className="section__title">{title}</h2>

          <p className="section__description">{description}</p>
        </header>

        <div className={clsx("section__body", className)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
