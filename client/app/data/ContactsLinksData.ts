import PhoneIcon from "~/assets/icons/phone.svg?react";
import LetterIcon from "~/assets/icons/letter.svg?react";
import TelegramIcon from "~/assets/icons/telegram-alt.svg?react";

import type { ContactLink } from "~/types";
import type { InfoData } from "~/api/info";

import { formatPhone } from "~/formatters/formatPhone";

export const getContactsLinksData = (info: InfoData): ContactLink[] => {
  return [
    {
      id: 1,
      label: info.contacts.phone,
      Icon: PhoneIcon,
      href: `tel:${formatPhone(info.contacts.phone)}`,
    },
    {
      id: 2,
      label: info.contacts.email,
      Icon: LetterIcon,
      href: `mailto:${info.contacts.email}`,
    },
    {
      id: 3,
      label: info.contacts.telegram_username,
      Icon: TelegramIcon,
      href: info.contacts.telegram_link,
    },
  ];
};
