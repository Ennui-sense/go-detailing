import PhoneIcon from "~/assets/icons/phone.svg?react"
import LetterIcon from "~/assets/icons/letter.svg?react"
import TelegramIcon from "~/assets/icons/telegram-alt.svg?react"

import type { ContactLink } from "~/types"

export const ContactsLinksData: ContactLink[] = [
	{
		id: 1,
		label: "+7 (342) 27-37-107",
		Icon: PhoneIcon,
		href: "tel:+73422737107"
	},
	{
		id: 2,
		label: "godetailing@mail.com",
		Icon: LetterIcon,
		href: "mailto:godetailing@mail.com"
	},
	{
		id: 3,
		label: "@GOdetail_manager",
		Icon: TelegramIcon,
		href: "/"
	},
]