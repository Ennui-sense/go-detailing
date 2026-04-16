import "./Soc1als.scss";

import clsx from "clsx";

import { getSoc1alsButtonsData } from "~/data/Soc1alsLinksData";

import { useRouteLoaderData } from "react-router";
import type { loader as rootLoader } from "~/root";

import Soc1alsLink from "../Soc1alsLink/Soc1alsLink";

interface Soc1alsProps {
  className?: string;
}

const Soc1als = ({ className }: Soc1alsProps) => {
  const rootData = useRouteLoaderData<typeof rootLoader>("root");

  if (!rootData) return null;

  const { info } = rootData;
  const soc1alsLinks = getSoc1alsButtonsData(info);

  return (
    <div className={clsx("soc1als", className)}>
      {soc1alsLinks.map(({ id, Icon, title, href }) => (
        <Soc1alsLink Icon={Icon} title={title} key={id} href={href} />
      ))}
    </div>
  );
};

export default Soc1als;
