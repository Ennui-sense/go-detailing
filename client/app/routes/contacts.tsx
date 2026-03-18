import type { Route } from "./+types/contacts";

import Page from "~/layouts/Page";
import Additions from "~/sections/Additions/Additions";
import Services from "~/sections/Services/Services";
import Reviews from "~/sections/Reviews/Reviews";

export function meta() {
  return [
    { title: "Go detailing | Контакты" },
    { name: "description", content: "Contacts Page" },
  ];
}

export default function ContactsRoute() {
  return (
    <Page>
      <div className="bg__dark">
        <Services isHero />
      </div>
      <div className="bg__accent-light">
        <Additions />
      </div>
      <div className="bg__dark">
        <Reviews />
      </div>
    </Page>
  );
}
