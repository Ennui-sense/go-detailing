import Page from "~/layouts/Page";

import Hero from "~/sections/Hero/Hero";
import Benefits from "~/sections/Benefits/Benefits";
import Brands from "~/sections/Brands/Brands";

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
    </Page>
  );
}
