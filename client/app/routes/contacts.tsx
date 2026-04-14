import type { Route } from "./+types/contacts";

import Page from "~/layouts/Page";
import Contacts from "~/sections/Contacts/Contacts";
import Process from "~/sections/Process/Process";
import News from "~/sections/News/News";

import { getVkNews } from "~/api/news";
import { useLoaderData } from "react-router";

export function meta() {
  return [
    { title: "Go detailing | Контакты" },
    { name: "description", content: "Contacts Page" },
  ];
}

export async function loader() {
  const news = await getVkNews();

  return news;
}

export default function ContactsRoute() {
  const news = useLoaderData<typeof loader>();

  return (
    <Page>
      <h1 className="visually-hidden">Наши контакты</h1>

      <div className="bg__dark">
        <Contacts heroOffset />
        <Process />
      </div>

      <News withBottomMargin data={news} />
    </Page>
  );
}
