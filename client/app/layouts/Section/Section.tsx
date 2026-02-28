import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title?: ReactNode;
  className: string;
  children: ReactNode;
}

const Section = ({
  title,
  className,
  children
}: SectionProps) => {
  return (
    <section className={clsx("section")}>
      {title && (
        <header className="section__header container">
          <h2 className="section__title">{title}</h2>
        </header>
      )}

      <div className={clsx("section__body", className)}>{children}</div>
    </section>
  );
};

export default Section;
