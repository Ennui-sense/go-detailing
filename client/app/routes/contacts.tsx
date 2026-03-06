import type { Route } from "./+types/contacts";

import Page from "~/layouts/Page";

export function meta() {
	return [
		{title: "Go detailing | Контакты"},
		{name: "description", content: "Contacts Page"}
	]
}

export default function ContactsRoute() {
	return (
		<Page>
			Контакты
		</Page>
	)
}