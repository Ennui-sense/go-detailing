import "./Contacts.scss";

import Section from "~/layouts/Section/Section";
import ContactsSoc1alsLink from "~/components/ContactsLink/ContactsSoc1alsLink";

import { ContactsLinksData } from "~/data/ContactsLinksData";

import mapImageSrc from "~/assets/images/map.jpg";

interface ContactsProps {
  isHero?: boolean;
}

const Contacts = ({ isHero }: ContactsProps) => {
  return (
    <Section className="contacts" title="Как с нами связаться?" isHero={isHero} isLeft>
      <div className="contacts__inner">
        <div className="contacts__body">
          <p className="contacts__hours">Ежедневно, 24/7</p>

          <address className="contacts__soc1als">
            <ul className="contacts__soc1als-list">
              {ContactsLinksData.map(({ id, label, href, Icon }) => (
                <li className="contacts__soc1als-item" key={id}>
                  <ContactsSoc1alsLink label={label} href={href} Icon={Icon} />
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className="contacts__location">
          <img
            src={mapImageSrc}
            alt=""
            className="contacts__image"
            width={600}
            height={500}
            loading="lazy"
          />

          <p className="contacts__address">Монастырская, 25</p>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
