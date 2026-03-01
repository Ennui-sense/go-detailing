import Page from "~/layouts/Page";

import Hero from "~/sections/Hero/Hero";
import Benefits from "~/sections/Benefits/Benefits";
import Brands from "~/sections/Brands/Brands";
import Reviews from "~/sections/Reviews/Reviews";
import Faq from "~/sections/Faq/Faq";
import Steps from "~/sections/Steps/Steps";

export function meta() {
  return [
    { title: "GO detailing | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return (
    <Page>
      <Hero />
      <Benefits />
      <Brands />

      <div className="bg__dark">
        <Reviews />
      </div>

      <div className="bg__accent-light">
        <Faq />
      </div>

      <Steps />
    </Page>
  );
}
