import { fetchStrapi } from "./strapi";
import type { NewsStrapiItem } from "./types";

interface StrapiSingleResponse<T> {
  result: T;
  meta: Record<string, never>;
}

export async function getVkNews() {
	const query = "/api/vk-news"

	const response = await fetchStrapi<StrapiSingleResponse<NewsStrapiItem[]>>(query)

	return response.result
}