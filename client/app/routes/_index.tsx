import Page from "~/layouts/Page";

import Hero from "~/sections/Hero/Hero";

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
    </Page>
  );
}
