import type { FooterGroup } from "~/types";
import type { InfoData } from "~/api/info";

export const getFooterGroupsData = (info: InfoData): FooterGroup[] => [
  {
    id: 1,
    title: "Клиентам",
    items: [
      {
        id: 1,
        href: "/",
        label: "Главная",
      },
      {
        id: 2,
        href: "/price",
        label: "Прайс-лист",
      },
      {
        id: 3,
        href: "/about",
        label: "О нас",
      },
      {
        id: 4,
        href: "/contacts",
        label: "Контакты",
      },
    ],
  },
  {
    id: 2,
    title: "Реквизиты",
    items: [
      {
        id: 1,
        label: `ИП ${info.requisites.ip}`,
      },
      {
        id: 2,
        label: `ИНН ${info.requisites.inn}`,
      },
      {
        id: 3,
        label: `ОГРН ${info.requisites.ogrn}`,
      },
      {
        id: 4,
        href: "/abc",
        label: "Политика конфиденциальности",
      },
    ],
  },
];