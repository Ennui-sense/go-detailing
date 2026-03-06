import type React from "react";
import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";

interface ISoc1alsButton {
  id: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export const Soc1alsButtonsData: ISoc1alsButton[] = [
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
