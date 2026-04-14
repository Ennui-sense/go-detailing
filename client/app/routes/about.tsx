import Page from "~/layouts/Page";
import About from "~/sections/About/About";
import Services from "~/sections/Services/Services";
import Comparison from "~/sections/Comparison/Comparison";
import News from "~/sections/News/News";

import { useLoaderData } from "react-router";
import { getAboutPage } from "~/api/about";
import { getVkNews } from "~/api/news";

export function meta() {
  return [
    { title: "Go detailing | О нас" },
    { name: "description", content: "About us Page" },
  ];
}

export async function loader() {
  const [aboutPage, news] = await Promise.all([getAboutPage(), getVkNews()]);

  return { aboutPage, news };
}

export default function AboutRoute() {
  const { aboutPage, news } = useLoaderData<typeof loader>();

  return (
    <Page>
      <h1 className="visually-hidden">Информация о нас</h1>

      <div className="bg__dark">
        <About heroOffset />
      </div>

      <Comparison data={aboutPage.comparisons}/>

      <div className="bg__dark">
        <Services data={aboutPage.services}/>
      </div>

			<News data={news} withBottomMargin></News>
    </Page>
  );
}
