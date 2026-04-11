import "./Soc1als.scss";

import clsx from "clsx";

import { Soc1alsButtonsData } from "~/data/Soc1alsButtonsData";

import Soc1alsButton from "../Soc1alsButton/Soc1alsButton";

interface Soc1alsProps {
  className?: string;
}

const Soc1als = ({ className }: Soc1alsProps) => {
  return (
    <div className={clsx("soc1als", className)}>
      {Soc1alsButtonsData.map(({ id, Icon, title }) => (
        <Soc1alsButton Icon={Icon} title={title} key={id} />
      ))}
    </div>
  );
};

export default Soc1als;
