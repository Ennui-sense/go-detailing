import "./FooterTop.scss";

import Logo from "../Logo/Logo";
import FooterGroup from "../FooterGroup/FooterGroup";
import Link from "../Link/Link";
import Soc1als from "../Soc1als/Soc1als";

import LogoImageSrc from "~/assets/images/logo.svg";

import { getFooterGroupsData } from "~/data/FooterGroupsData";

import { useRouteLoaderData } from "react-router";
import type { loader as rootLoader } from "~/root";

import { formatPhone } from "~/formatters/formatPhone";

interface FooterTopProps {
  isMobile: boolean;
}

const FooterTop = ({ isMobile }: FooterTopProps) => {
  const rootData = useRouteLoaderData<typeof rootLoader>("root");

  if (!rootData) return null;

  const { info } = rootData;
  const footerGroups = getFooterGroupsData(info);

  return (
    <div className="footer-top">
      <Logo className="footer-top__logo" imageSrc={LogoImageSrc} />

      <div className="footer-top__body">
        {footerGroups.map(({ title, items, id }) => (
          <FooterGroup items={items} title={title} key={id} />
        ))}
      </div>

      <div className="footer-top__info">
        <div className="footer-top__contacts">
          <Link
            className="footer-top__link"
            href={`tel:${formatPhone(info.contacts.phone)}`}
          >
            {info.contacts.phone}
          </Link>
          <a
            href={`mailto:${formatPhone(info.contacts.email)}`}
            className="footer-top__email-link"
          >
            {info.contacts.email}
          </a>
        </div>
        {isMobile ? (
          <Soc1als className="footer-top__soc1als" />
        ) : (
          <p className="footer-top__address">{info.address.address}</p>
        )}
      </div>
    </div>
  );
};

export default FooterTop;
