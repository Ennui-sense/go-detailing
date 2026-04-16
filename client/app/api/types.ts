export interface StrapiItem {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface ServiceStrapiItem extends StrapiItem {
	label: string;
}

export interface ServiceStrapi extends StrapiItem {
	title: string;
	value: string;
	minPrice: string;
	maxPrice: string;
	description: string;
	time: string;
	href: string;
	base_items: ServiceStrapiItem[];
	salon_items: ServiceStrapiItem[];
	bodywork_items: ServiceStrapiItem[];
}

export interface ComparisonStrapiItem extends StrapiItem {
	label: string;
}

export interface ComparisonStrapi extends StrapiItem {
	title: string;
	image: {url: string};
	comparison_items: ComparisonStrapiItem[];
}

export interface FaqStrapi extends StrapiItem {
	question: string;
	answer: string;
}

export interface ReviewStrapi extends StrapiItem {
	name: string;
	description: string;
	rate: number;
}

export interface NewsStrapiItem extends StrapiItem {
  text: string;
  photo: string;
  date: number;
  url: string;
};

export interface AdditionStrapi extends StrapiItem {
	title: string;
	description: string;
	price: number;
	imageSrc: {url: string}
	time: string;
}

export interface InfoContactsStrapi {
	id: number;
	phone: string;
	email: string;
	telegram_link: string;
	telegram_username: string;
	vk_link: string;
}

export interface InfoRequisitesStrapi {
	id: number;
	ip: string;
	inn: string;
	ogrn: string;
}

export interface InfoAddressStrapi {
	id: number;
	address: string;
	map: {url: string};
}