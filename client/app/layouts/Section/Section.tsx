import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title?: ReactNode;
  className: string;
  children: ReactNode;
  isRow?: boolean;
  isMarquee?: boolean;
}

const Section = ({
  title,
  className,
  children,
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
        <h2 className={clsx("section__title", { "visually-hidden": !title })}>
          {title}
        </h2>

        <div className={clsx("section__body", className)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
