export type MenuLink = {
	id: number;
	label: string;
	href: string;
}

export type FooterGroupItem = {
	id: number;
	href?: string;
	label: string;
}

export type Soc1alButton = {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
	href: string;
}

export type BenefitCard = {
	id: number;
	label: string
}

export type Brand = {
	id: number;
	imageSrc: string
}

export type ServiceCard = {
  id: number;
  label: string;
	value: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: number; // в минутах
  href: string;
  includedItems: ServiceIncludedItem[];
  includedItemsOnBodywork?: ServiceIncludedItem[];
  includedItemsOnSalon?: ServiceIncludedItem[];
}

export type ServiceIncludedItem = {
  id: number;
  label: string;
}

export type ReviewCard =  {
	id: number;
	text: string;
	name: string;
	rate: number;
}

export type StepCard = {
  id: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export type FaqAccordion = {
  id: number;
  title: string;
  text: string;
}

export type AdditionCard = {
  id: number;
  title: string;
  imageSrc: string;
  time: number;
  price: number;
  description: string;
}

export type ContactLink = {
	id: number;
	label: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
	href: string
}

export type FooterGroup = {
	id: number;
	title: string;
	items: FooterGroupItem[]
}

export type ComparisonCardItem = {
  id: number;
  label: string;
}

export type ComparisonCard =  {
  id: number;
  title: string;
  imageSrc: string;
  items: ComparisonCardItem[];
}

export type NewsItem = {
  id: number;
  text: string;
  photo: string;
  date: number;
  url: string;
};