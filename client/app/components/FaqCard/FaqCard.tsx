import "./FaqCard.scss";

interface FaqCardProps {
	title: string;
	text: string;
}

const FaqCard = ({title, text}: FaqCardProps) => {
	return (
		<details className="faq-card">
			<summary className="faq-card__title">{title}</summary>
			<div className="faq-card__text">{text}</div>
		</details>
	)
}

export default FaqCard