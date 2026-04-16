import Page from "~/layouts/Page";

import Hero from "~/sections/Hero/Hero";
import Benefits from "~/sections/Benefits/Benefits";
import Brands from "~/sections/Brands/Brands";
import Services from "~/sections/Services/Services";
import Reviews from "~/sections/Reviews/Reviews";
import Faq from "~/sections/Faq/Faq";
import Steps from "~/sections/Steps/Steps";
import Cta from "~/sections/Cta/Cta";
import News from "~/sections/News/News";

import { useLoaderData } from "react-router";

import { getVkNews } from "~/api/news";
import { getMainPage } from "~/api";

export function meta() {
  return [
    { title: "GO detailing | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export async function loader() {
  const [mainPage, news] = await Promise.all([getMainPage(), getVkNews()]);

  return { mainPage, news };
}

export default function IndexRoute() {
  const { mainPage, news } = useLoaderData<typeof loader>();

  return (
    <Page>
      <Hero />
      <Benefits />
      <Brands />

      <div className="bg__dark" id="services">
        <Services data={mainPage.services} />
        <Reviews data={mainPage.reviews} />
      </div>

      <News data={news} />
      <Steps />

      <div className="bg__accent-light">
        <Faq data={mainPage.faqs} />
      </div>

      <div className="bg__dark">
        <Cta />
      </div>
    </Page>
  );
}
