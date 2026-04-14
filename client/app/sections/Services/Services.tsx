import "./Services.scss";

import Section from "~/layouts/Section/Section";

import { useMediaQuery } from "~/hooks/useMediaQuery";

import ServicesDesktop from "~/components/ServicesDesktop/ServicesDesktop";
import ServicesMobile from "~/components/ServicesMobile/ServicesMobile";

import type { ServiceStrapi } from "~/api/types";

interface ServicesProps {
  heroOffset?: boolean;
	data: ServiceStrapi[]
}

const Services = ({ heroOffset, data }: ServicesProps) => {
  const isTablet = useMediaQuery("(max-width: 64rem)");

  return (
    <Section title="Комплексный подход" bodyClassName="services" heroOffset={heroOffset}>
      <div className="services__inner">
        {!isTablet ? <ServicesDesktop data={data}/> : <ServicesMobile data={data}/>}
      </div>
    </Section>
  );
};

export default Services;
