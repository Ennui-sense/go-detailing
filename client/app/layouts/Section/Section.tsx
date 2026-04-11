import "./Section.scss";

import type { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps {
  title: ReactNode;
  description?: string;
  bodyClassName: string;
  children: ReactNode;
  titleHidden?: boolean;
  heroOffset?: boolean;
  innerLayout?: "column" | "row";
  align?: "left" | "center";
  withHeaderContainer?: boolean;
  withTopMargin?: boolean;
  withBottomMargin?: boolean;
  withoutBottomMargin?: boolean;
}

const Section = ({
  title,
  description,
  bodyClassName,
  children,
  withTopMargin = false,
  titleHidden = false,
  innerLayout = "column",
  heroOffset = false,
  align = "center",
  withHeaderContainer = false,
  withBottomMargin = false,
  withoutBottomMargin = false,
}: SectionProps) => {
  const shouldHeaderRender = !titleHidden || description;

  return (
    <section
      className={clsx("section", {
        "section--bottom-margin": withBottomMargin,
        "section--without-bottom-margin": withoutBottomMargin,
      })}
    >
      <div
        className={clsx("section__inner", {
          container: !withHeaderContainer,
          "section__inner--row": innerLayout === "row",
          "section__inner--hero": heroOffset,
          "section__inner--left": align === "left",
        })}
      >
        {shouldHeaderRender ? (
          <header
            className={clsx("section__header", {
              "section__header--margin-top": withTopMargin,
              container: withHeaderContainer,
            })}
          >
            <h2
              className={clsx("section__title", {
                "visually-hidden": titleHidden,
              })}
            >
              {title}
            </h2>

            {description && (
              <p className="section__description">{description}</p>
            )}
          </header>
        ) : (
          <h2
            className={clsx("section__title", {
              "visually-hidden": titleHidden,
            })}
          >
            {title}
          </h2>
        )}

        <div className={clsx("section__body", bodyClassName)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
