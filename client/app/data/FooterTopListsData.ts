interface IFooterTopItem {
	id: number;
	href?: string;
	label: string;
}

interface IFooterTopList {
	id: number;
	title: string;
	items: IFooterTopItem[]
}

export const FooterTopListsData: IFooterTopList[] = [
	{
		id: 1,
		title: "Клиентам",
		items: [
			{
				id: 1,
				href: "/",
				label: "Главная"
			},
			{
				id: 2,
				href: "/price",
				label: "Прайс-лист"
			},
			{
				id: 3,
				href: "/about",
				label: "О нас"
			},
			{
				id: 4,
				href: "/contacts",
				label: "Контакты"
			},
		]
	},
	{
		id: 2,
		title: "Реквизиты",
		items: [
			{
				id: 1,
				label: "ИП Оборин Ярослав Владимирович"
			},
			{
				id: 2,
				label: "ИНН 590203329585"
			},
			{
				id: 3,
				label: "ОГРН 325595800093288"
			},
			{
				id: 4,
				href: "/abc",
				label: "Политика конфиденциальности"
			},
		]
	},
]