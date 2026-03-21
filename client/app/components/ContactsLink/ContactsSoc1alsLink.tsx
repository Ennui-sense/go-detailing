import "./ContactsSoc1alsLink.scss";

interface ContactsSoc1alsLinkProps {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const ContactsSoc1alsLink = ({
  label,
  Icon,
  href,
}: ContactsSoc1alsLinkProps) => {
  return (
    <a href={href} className="contacts-soc1als-link">
      <Icon />

      {label}
    </a>
  );
};

export default ContactsSoc1alsLink;
