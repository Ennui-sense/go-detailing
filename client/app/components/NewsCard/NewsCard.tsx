import "./NewsCard.scss";

import Button from "../Button/Button";

interface NewsCardProps {
  text: string;
  photo: string;
  date: number;
  url: string;
}

const NewsCard = ({ text, photo, date, url }: NewsCardProps) => {
  const formatTime = (date: number) => {
    return new Date(date * 1000).toLocaleDateString("ru-Ru", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className="news-card">
      <div className="news-card__inner">
        <p className="news-card__date">{formatTime(date)}</p>

        <img
          src={photo}
          alt=""
          className="news-card__image"
          width={400}
          height={250}
        />

        <p className="news-card__text">{text}</p>

        <Button className="news-card__button" href={url} variant="dark">
          Читать
        </Button>
      </div>
    </article>
  );
};

export default NewsCard;
