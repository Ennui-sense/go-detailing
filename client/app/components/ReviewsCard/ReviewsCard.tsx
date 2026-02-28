import clsx from "clsx";
import "./ReviewsCard.scss";

interface ReviewsCardProps {
  text: string;
  name: string;
  rate: number;
  className: string;
}

const ReviewsCard = ({ text, name, rate, className }: ReviewsCardProps) => {
  const formatRate = (rate: number) => {
    return rate.toString().replace(".", ",");
  };

  return (
    <article className={clsx("reviews-card", className)}>
      <p className="reviews-card__text">{text}</p>
      <div className="reviews-card__info">
        <p className="reviews-card__name">{name}</p>
        <p className="reviews-card__rate">{formatRate(rate)}</p>
      </div>
    </article>
  );
};

export default ReviewsCard;
