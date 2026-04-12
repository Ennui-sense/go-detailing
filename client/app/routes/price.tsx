import type { Route } from "./+types/price";

import Page from "~/layouts/Page";
import Additions from "~/sections/Additions/Additions";
import Services from "~/sections/Services/Services";
import Reviews from "~/sections/Reviews/Reviews";

export function meta() {
  return [
    { title: "Go detailing | Прайс-лист" },
    { name: "description", content: "Price Page" },
  ];
}

export default function PriceRoute() {
  return (
    <Page>
			<h1 className="visually-hidden">Наши услуги</h1>
			
      <div className="bg__dark">
        <Services heroOffset />
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
