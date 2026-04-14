import type { Route } from "./+types/price";

import Page from "~/layouts/Page";
import Additions from "~/sections/Additions/Additions";
import Services from "~/sections/Services/Services";
import Reviews from "~/sections/Reviews/Reviews";

import { getPricePage } from "~/api/price";

import { useLoaderData } from "react-router";

export function meta() {
  return [
    { title: "Go detailing | Прайс-лист" },
    { name: "description", content: "Price Page" },
  ];
}

export async function loader() {
  const pricePage = await getPricePage();

  return { pricePage };
}

export default function PriceRoute() {
  const { pricePage } = useLoaderData<typeof loader>();

  return (
    <Page>
      <h1 className="visually-hidden">Наши услуги</h1>

      <div className="bg__dark">
        <Services heroOffset data={pricePage.services}/>
      </div>
      <div className="bg__accent-light">
        <Additions data={pricePage.additions}/>
      </div>
      <div className="bg__dark">
        <Reviews data={pricePage.reviews}/>
      </div>
    </Page>
  );
}
