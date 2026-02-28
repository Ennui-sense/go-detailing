import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title?: ReactNode;
  className: string;
  children: ReactNode;
  isRow?: boolean;
}

const Section = ({
  title,
  className,
  children,
  isRow = false,
}: SectionProps) => {
  return (
    <section className="section">
      <div
        className={clsx("section__inner container", {
          "section__inner--row": isRow,
        })}
      >
        <header className="section__header">
          <h2 className={clsx("section__title", { "visually-hidden": !title })}>
            {title}
          </h2>
        </header>

        <div className={clsx("section__body", className)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
