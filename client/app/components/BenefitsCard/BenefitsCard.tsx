import clsx from "clsx";
import "./BenefitsCard.scss";

interface BenefitsCardProps {
  label: string;
  index: number;
  className: string;
}

const BenefitsCard = ({ label, index, className }: BenefitsCardProps) => {
  return (
    <article className={clsx("benefits-card", className)}>
      <p className="benefits-card__number">0{index}</p>
      <p className="benefits-card__label">{label}</p>
    </article>
  );
};

export default BenefitsCard;
