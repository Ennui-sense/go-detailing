interface IServicesCard {
  id: number;
  title: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  time: number; // в минутах
  includedItems: IIncludedItem[];
}

export interface IIncludedItem {
  id: number;
  label: string;
  marker?: boolean;
  italic?: boolean;
}

export const ServicesCardsData: IServicesCard[] = [
  {
    id: 1,
    title: "Салон",
    minPrice: 9490,
    maxPrice: 11490,
    description:
      "Специально для тех, кому важно идеальное состояние интерьера — профессиональная химчистка салона с использованием качественных средств",
    time: 180,
    includedItems: [
      {
        id: 1,
        label: "Уборка грязи из ткани и кожи торнадором-экстрактором",
        marker: true,
      },
      {
        id: 2,
        label: "Мойка всех поверхностей — от пластика до потолка",
        marker: true,
      },
      {
        id: 3,
        label: "Чистка экранов, стекол, зеркал без разводов",
        marker: true,
      },
      {
        id: 4,
        label: "Удаление пятен с пластика",
        marker: true,
      },
      {
        id: 5,
        label: "Паровая дезинфекция всего салона",
        marker: true,
      },
      {
        id: 6,
        label: "Кондиционирование кожи, предотвращающее растрескивание",
        marker: true,
      },
    ],
  },
  {
    id: 2,
    title: "Стандарт",
    minPrice: 13990,
    maxPrice: 16990,
    description:
      "Подойдет большинству автовладельцев, идеальный баланс цены и качества для регулярного поддержания чистоты автомобиля",
    time: 270,
    includedItems: [
      {
        id: 1,
        label: "Всё из тарифа «Салон», а также:",
      },
      {
        id: 2,
        label: "По кузову:",
        italic: true,
      },
      {
        id: 3,
        label: "Профессиональная ручная мойка кузова",
        marker: true,
      },
      {
        id: 4,
        label: "Качественная проработка арок, дисков и резины",
        marker: true,
      },
      {
        id: 5,
        label: "Удаление водного камня со стёкол и лакокрасочного покрытия",
        marker: true,
      },
      {
        id: 6,
        label: "Нанесение антидождя",
        marker: true,
      },
    ],
  },
  {
    id: 3,
    title: "Максимум",
    minPrice: 21490,
    maxPrice: 24490,
    description:
      "Идеально подойдет, если автомобиль сильно загрязнен или давно нуждается в профессиональной чистке",
    time: 390,
    includedItems: [
      {
        id: 1,
        label: "Всё из тарифа «Салон», а также:",
      },
      {
        id: 2,
        label: "По салону:",
        italic: true,
      },
      {
        id: 3,
        label: "Удаление шерсти животных (при необходимости)",
        marker: true,
      },
      {
        id: 4,
        label: "Удаление тяжёлых пятен (при необходимости)",
        marker: true,
      },
      {
        id: 5,
        label: "Озонация — устранение запахов",
        marker: true,
      },
      {
        id: 6,
        label: "По кузову:",
        italic: true,
      },
      {
        id: 7,
        label: "Мойка днища и подкапотного пространства",
        marker: true,
      },
      {
        id: 8,
        label: "Защита ручек от микроцарапин",
        marker: true,
      },
      {
        id: 9,
        label: "Гибридное кварцевое покрытие — блеск и защита на 12 месяцев",
        marker: true,
      },
      {
        id: 10,
        label: "Удаление следов насекомых, смолы, пыльцы",
        marker: true,
      },
    ],
  },
];
