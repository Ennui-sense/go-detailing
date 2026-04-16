import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

import type { InfoData } from "~/api/info";
import type { Soc1alButton } from "~/types";

export const getSoc1alsButtonsData = (info: InfoData): Soc1alButton[] => {
  return [
    {
      id: 1,
      Icon: VkIcon,
      title: "Наш Вконтакте",
      href: `${info.contacts.vk_link}`,
    },
    {
      id: 2,
      Icon: TelegramIcon,
      title: "Наш Телеграм",
      href: `${info.contacts.telegram_link}`,
    },
  ];
};
