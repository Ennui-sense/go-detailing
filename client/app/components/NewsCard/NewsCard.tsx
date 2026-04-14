import "./NewsCard.scss";

import Link from "../Link/Link";

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

        <Link
          className="news-card__link"
          href={url}
          variant="dark"
          openInNewWindow
        >
          Читать
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
