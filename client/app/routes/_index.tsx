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

import { useState, useEffect } from "react";

import axios from "axios";

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_STRAPI_URL
  : "http://localhost:1337";

const API_URL = `${BASE_URL}/main?populate*`

export function meta() {
  return [
    { title: "GO detailing | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		async function loadData() {
			try {
				setIsLoading(true)
				
				const res = await axios.get(API_URL)

				setData(res.data)
			} catch (error) {
				console.error("Ошибка при получении данных:(", error)
			} finally {
				setIsLoading(false)
			}
		}

		loadData()
	}, [])

	if (!isLoading) {
		console.log(data);
		
	}
	
	return (
    <Page>
      <Hero />
      <Benefits />
      <Brands />

      <div className="bg__dark" id="services">
        <Services />
        <Reviews />
      </div>

      <News />
      <Steps />

      <div className="bg__accent-light">
        <Faq />
      </div>

      <div className="bg__dark">
        <Cta />
      </div>
    </Page>
  );
}
