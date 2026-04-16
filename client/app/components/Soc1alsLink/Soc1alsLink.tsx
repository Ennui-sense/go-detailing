import "./Soc1alsLink.scss";

interface Soc1alsLinkProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

const Soc1alsLink = ({ Icon, title, href }: Soc1alsLinkProps) => {
  return (
    <a className="soc1als-link" href={href} target="_blank">
      <Icon />

      <span className="visually-hidden">{title}</span>
    </a>
  );
};

export default Soc1alsLink;
