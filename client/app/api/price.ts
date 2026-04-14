import { fetchStrapi } from "./strapi";
import qs from "qs"

import type { StrapiItem, ServiceStrapi, AdditionStrapi, ReviewStrapi } from "./types";


export interface PricePageData extends StrapiItem {
	services: ServiceStrapi[];
	reviews: ReviewStrapi[];
	additions: AdditionStrapi[];
}

interface StrapiSingleResponse<T> {
	data: T;
	meta: Record<string, never>;
}

export async function getPricePage() {
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
				reviews: true,
				additions: {
					populate: {
						imageSrc: true
					}
				}
			},
		},
		{ encodeValuesOnly: true },
	);

	const response = await fetchStrapi<StrapiSingleResponse<PricePageData>>(`/api/price?${query}`);
	return response.data;
}
