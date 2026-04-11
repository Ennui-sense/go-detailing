import "./BenefitsCard.scss";
import clsx from "clsx";

interface BenefitsCardProps {
  label: string;
  index: number;
  className?: string;
}

const BenefitsCard = ({ label, index, className }: BenefitsCardProps) => {
  return (
    <div className={clsx("benefits-card", className)}>
      <p className="benefits-card__number">0{index}</p>
      <p className="benefits-card__label">{label}</p>
    </div>
  );
};

export default BenefitsCard;
