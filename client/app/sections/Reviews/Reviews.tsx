import "./Reviews.scss";

import Section from "~/layouts/Section/Section";
import ReviewsCard from "~/components/ReviewsCard/ReviewsCard";
import Button from "~/components/Button/Button";

import { ReviewsCardsData } from "~/data/ReviewsCardsData";

const Reviews = () => {
  return (
    <Section
      title={
        <>
          Реальные истории{" "}
          <span className="section__title-accent">сияющих</span> авто
        </>
      }
      className="reviews"
    >
      <div className="reviews__inner">
        <ul className="reviews__list">
          {ReviewsCardsData.map(({ id, text, name, rate }) => (
            <li className="reviews__item" key={id}>
              <ReviewsCard
                text={text}
                name={name}
                rate={rate}
                className="reviews__card"
              />
            </li>
          ))}
        </ul>

        <div className="reviews__buttons">
          <Button
            className="reviews__button button--phone"
            href="tel:+79223186599"
          >
            +7 922 318 6599
          </Button>
          <Button className="reviews__button">Записаться</Button>
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
