import type { Route } from "./+types/contacts";

import Page from "~/layouts/Page";
import Contacts from "~/sections/Contacts/Contacts";
import Process from "~/sections/Process/Process";

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
        <Contacts isHero />
        <Process />
      </div>
    </Page>
  );
}
