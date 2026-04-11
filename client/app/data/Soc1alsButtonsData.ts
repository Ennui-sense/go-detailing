import type React from "react";
import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

import type { Soc1alsButton } from "~/types";

export const Soc1alsButtonsData: Soc1alsButton[] = [
  {
    id: 1,
    Icon: VkIcon,
    title: "Наш Вконтакте",
  },
  {
    id: 2,
    Icon: TelegramIcon,
    title: "Наш Телеграм",
  },
];
