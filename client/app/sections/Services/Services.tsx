import "./Services.scss";

import Section from "~/layouts/Section/Section";

import { useMediaQuery } from "~/hooks/useMediaQuery";

import ServicesDesktop from "~/components/ServicesDesktop/ServicesDesktop";
import ServicesMobile from "~/components/ServicesMobile/ServicesMobile";

interface ServicesProps {
  isHero?: boolean;
}

const Services = ({ isHero }: ServicesProps) => {
  const isTablet = useMediaQuery("(max-width: 64rem)");

  return (
    <Section title="Комплексный подход" className="services" isHero={isHero}>
      <div className="services__inner">
        {!isTablet ? <ServicesDesktop /> : <ServicesMobile />}
      </div>
    </Section>
  );
};

export default Services;
