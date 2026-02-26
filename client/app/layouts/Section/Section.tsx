import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title?: string;
  className: string;
  children: ReactNode;
  variant?: "default" | "dark" | "light";
}

const Section = ({
  title,
  className,
  children,
  variant = "default",
}: SectionProps) => {
  return (
    <section className={clsx("section", `section--${variant}`)}>
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
