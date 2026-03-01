import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title: ReactNode;
  description?: string;
  className: string;
  children: ReactNode;
  isRow?: boolean;
  isMarquee?: boolean;
  marginTop?: number;
}

const Section = ({
  title,
  description,
  className,
  children,
  marginTop,
  isRow = false,
  isMarquee = false,
}: SectionProps) => {
  return (
    <section className="section">
      <div
        className={clsx("section__inner", {
          container: !isMarquee,
          "section__inner--row": isRow,
          "section__inner--marquee": isMarquee,
        })}
      >
        <header
          className={clsx("section__header", { "visually-hidden": !title })}
          style={{ marginTop: `${marginTop && marginTop / 16}rem` }}
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
