import "./Contacts.scss";

import Section from "~/layouts/Section/Section";
import ContactsSoc1alsLink from "~/components/ContactsLink/ContactsSoc1alsLink";

import { getContactsLinksData } from "~/data/ContactsLinksData";

import { useRouteLoaderData } from "react-router";
import type { loader as rootLoader } from "~/root";

import { getMediaUrl } from "~/api/strapi";

interface ContactsProps {
  heroOffset?: boolean;
}

const Contacts = ({ heroOffset }: ContactsProps) => {
  const rootData = useRouteLoaderData<typeof rootLoader>("root");

  if (!rootData) return null;

  const { info } = rootData;

  const contactsLinks = getContactsLinksData(info);

  return (
    <Section
      bodyClassName="contacts"
      title="Как с нами связаться?"
      heroOffset={heroOffset}
      align="left"
    >
      <div className="contacts__inner">
        <div className="contacts__body">
          <p className="contacts__hours">Ежедневно, 24/7</p>

          <address className="contacts__soc1als">
            <ul className="contacts__soc1als-list">
              {contactsLinks.map(({ id, label, href, Icon }) => (
                <li className="contacts__soc1als-item" key={id}>
                  <ContactsSoc1alsLink label={label} href={href} Icon={Icon} />
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className="contacts__location">
          <img
            src={getMediaUrl(info.address.map.url)}
            alt=""
            className="contacts__image"
            width={600}
            height={500}
            loading="lazy"
          />

          <p className="contacts__address">{info.address.address}</p>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
