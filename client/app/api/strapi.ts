export const STRAPI_BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_STRAPI_URL
  : "http://localhost:1337";

export const getStrapiUrl = (path: string) => {
  return `${STRAPI_BASE_URL}${path}`;
};

export async function fetchStrapi<T>(path: string): Promise<T> {
  const response = await fetch(getStrapiUrl(path));

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}