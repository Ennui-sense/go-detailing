import { fetchStrapi } from "./strapi";
import qs from "qs";

import type {
  StrapiItem,
  InfoAddressStrapi,
  InfoContactsStrapi,
  InfoRequisitesStrapi,
} from "./types";

export interface InfoData extends StrapiItem {
  contacts: InfoContactsStrapi;
  address: InfoAddressStrapi;
  requisites: InfoRequisitesStrapi;
}

interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, never>;
}

export async function getInfo() {
  const query = qs.stringify(
    {
      populate: {
				contacts: true,
				address: {
					populate: {
						map: true
					}
				},
				requisites: true
			},
    },
    { encodeValuesOnly: true },
  );

	
	
  const response = await fetchStrapi<StrapiSingleResponse<InfoData>>(
		`/api/info?${query}`,
  );
	console.log(response);
  return response.data;
}
