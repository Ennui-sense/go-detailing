interface IHeaderMenuLink {
	id: number;
	label: string;
	href: string;
}

export const HeaderMenuLinksData: IHeaderMenuLink[] = [
	{
		id: 1,
		label: "Главная",
		href: "/"
	},
	{
		id: 2,
		label: "Прайс-лист",
		href: "/price"
	},
	{
		id: 3,
		label: "FAQ",
		href: "/faq"
	},
	{
		id: 4,
		label: "Контакты",
		href: "/contacts"
	}
]