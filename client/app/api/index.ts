import { fetchStrapi } from "./strapi";
import qs from "qs"

import type { StrapiItem, ServiceStrapi, FaqStrapi, ReviewStrapi } from "./types";

export interface MainPageData extends StrapiItem {
  services: ServiceStrapi[];
  faqs: FaqStrapi[];
  reviews: ReviewStrapi[];
}

interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, never>;
}

export async function getMainPage() {
  const query = qs.stringify(
    {
      populate: {
        services: {
          populate: {
            base_items: true,
            salon_items: true,
            bodywork_items: true,
          },
        },
        faqs: true,
        reviews: true
      },
    },
    { encodeValuesOnly: true },
  );

  const response = await fetchStrapi<StrapiSingleResponse<MainPageData>>(`/api/main?${query}`);
  return response.data;
}
