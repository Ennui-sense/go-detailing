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

export type Soc1alsButton = {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export type BenefitsCard = {
	id: number;
	label: string
}

export type Brand = {
	id: number;
	imageSrc: string
}

export type ServicesCard = {
  id: number;
  label: string;
	value: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: number; // в минутах
  href: string;
  includedItems: ServicesIncludedItem[];
  includedItemsOnBodywork?: ServicesIncludedItem[];
  includedItemsOnSalon?: ServicesIncludedItem[];
}

export type ServicesIncludedItem = {
  id: number;
  label: string;
}

export type ReviewsCard =  {
	id: number;
	text: string;
	name: string;
	rate: number;
}

export type StepsCard = {
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

export type AdditionsCard = {
  id: number;
  title: string;
  imageSrc: string;
  time: number;
  price: number;
  description: string;
}

export type ContactsLink = {
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