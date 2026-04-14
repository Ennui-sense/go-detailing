import FirstImageSrc from "~/assets/images/comparison/1.jpg";
import SecondImageSrc from "~/assets/images/comparison/2.jpg";
import ThirdImageSrc from "~/assets/images/comparison/3.jpg";

import type { ComparisonCard } from "~/types";

export const ComparisonCardsData: ComparisonCard[] = [
  {
    id: 1,
    title: "Классическая автомойка",
    imageSrc: FirstImageSrc,
    items: [
      {
        id: 1,
        label: "Риск царапин и разводов",
      },
      {
        id: 2,
        label: "Привлечение неопытных специалистов",
      },
      {
        id: 3,
        label: "Отсутствие гарантий",
      },
      {
        id: 4,
        label: "Длинные пробки и очереди",
      },
      {
        id: 5,
        label: "Итог: автомобиль чистый, но не все прошло гладко.",
      },
    ],
  },
  {
    id: 2,
    title: "Детейлинг студия",
    imageSrc: SecondImageSrc,
    items: [
      {
        id: 1,
        label: "Запись на услугу за 2–3 недели",
      },
      {
        id: 2,
        label: "Полдня в дороге до студии и обратно",
      },
      {
        id: 3,
        label: "Зависимость от чужого графика",
      },
      {
        id: 4,
        label: "Вы без машины на целый день",
      },
      {
        id: 5,
        label: "Итог: отличный результат, но цена — ваше время и нервы",
      },
    ],
  },
  {
    id: 3,
    title: "Мобильный детейлинг",
    imageSrc: ThirdImageSrc,
    items: [
      {
        id: 1,
        label: "Полная автономность сервиса c выездом",
      },
      {
        id: 2,
        label: "Обученный и опытный персонал",
      },
      {
        id: 3,
        label: "Учитываем все ваши пожелания",
      },
      {
        id: 4,
        label: "Работаем вокруг вашего расписания",
      },
      {
        id: 5,
        label: "Итог: качественный результат без ущерба для ваших планов",
      },
    ],
  },
]
