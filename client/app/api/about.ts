import { fetchStrapi } from "./strapi";
import qs from "qs"

import type { StrapiItem, ServiceStrapi, ComparisonStrapi } from "./types";

export interface AboutPageData extends StrapiItem {
	services: ServiceStrapi[];
	comparisons: ComparisonStrapi[]
}

interface StrapiSingleResponse<T> {
	data: T;
	meta: Record<string, never>;
}

export async function getAboutPage() {
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
				comparisons: {
					populate: {
						image: true,
						comparison_items: true
					}
				}
			},
		},
		{ encodeValuesOnly: true },
	);

	const response = await fetchStrapi<StrapiSingleResponse<AboutPageData>>(`/api/about?${query}`);
	return response.data;
}
