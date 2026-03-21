import type { Route } from "./+types/about";

import Page from "~/layouts/Page";
import About from "~/sections/About/About";
import Services from "~/sections/Services/Services";

export function meta() {
  return [
    { title: "Go detailing | О нас" },
    { name: "description", content: "About us Page" },
  ];
}

export default function AboutRoute() {
  return (
    <Page>
      <div className="bg__dark">
				<About isHero/>
				<Services/>
			</div>
    </Page>
  );
}
