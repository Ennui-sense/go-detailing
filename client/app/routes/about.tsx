import type { Route } from "./+types/about";

import Page from "~/layouts/Page";
import About from "~/sections/About/About";
import Services from "~/sections/Services/Services";
import Comparison from "~/sections/Comparison/Comparison";

export function meta() {
  return [
    { title: "Go detailing | О нас" },
    { name: "description", content: "About us Page" },
  ];
}

export default function AboutRoute() {
  return (
    <Page>
			<h1 className="visually-hidden">Информация о нас</h1>

      <div className="bg__dark">
        <About isHero />
      </div>
			
      <Comparison />

      <div className="bg__dark">
        <Services />
      </div>
    </Page>
  );
}
