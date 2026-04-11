import "./Services.scss";

import Section from "~/layouts/Section/Section";

import { useMediaQuery } from "~/hooks/useMediaQuery";

import ServicesDesktop from "~/components/ServicesDesktop/ServicesDesktop";
import ServicesMobile from "~/components/ServicesMobile/ServicesMobile";

interface ServicesProps {
  heroOffset?: boolean;
}

const Services = ({ heroOffset }: ServicesProps) => {
  const isTablet = useMediaQuery("(max-width: 64rem)");

  return (
    <Section title="Комплексный подход" bodyClassName="services" heroOffset={heroOffset}>
      <div className="services__inner">
        {!isTablet ? <ServicesDesktop /> : <ServicesMobile />}
      </div>
    </Section>
  );
};

export default Services;
