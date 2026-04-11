import "./StepsCard.scss";

interface StepsCardProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const StepsCard = ({ Icon, title, description }: StepsCardProps) => {
  return (
    <div className="steps-card">
      <div className="steps-card__image">
        <Icon />
      </div>

      <div className="steps-card__content">
        <h3 className="steps-card__title">{title}</h3>
        <p className="steps-card__description">{description}</p>
      </div>
    </div>
  );
};

export default StepsCard;