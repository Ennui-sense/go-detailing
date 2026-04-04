import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title: ReactNode;
  className: string;
  children: ReactNode;
  description?: string;
  isMarquee?: boolean;
  marginTop?: boolean;
  hiddenTitle?: boolean;
  isRow?: boolean;
  isHero?: boolean;
  isLastSectionMargin?: boolean;
  isLeft?: boolean;
  isMobileSlider?: boolean;
}

const Section = ({
  title,
  description,
  className,
  children,
  marginTop = false,
  isMarquee = false,
  hiddenTitle = false,
  isRow = false,
  isHero = false,
  isLeft = false,
  isMobileSlider = false,
  isLastSectionMargin = false,
}: SectionProps) => {
  return (
    <section
      className={clsx("section", {
        "section--last-section-margin": isLastSectionMargin,
      })}
    >
      <div
        className={clsx("section__inner", {
          container: !isMarquee && !isMobileSlider,
          "section__inner--row": isRow,
          "section__inner--hero": isHero,
          "section__inner--left": isLeft,
        })}
      >
        <header
          className={clsx("section__header", {
            "section__header--margin-top": marginTop,
            "visually-hidden": hiddenTitle,
            container: isMobileSlider,
          })}
        >
          <h2 className="section__title">{title}</h2>

          {description && <p className="section__description">{description}</p>}
        </header>

        <div className={clsx("section__body", className)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
