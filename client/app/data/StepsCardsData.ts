import DocumentIcon from "~/assets/icons/document.svg?react";
import PhoneCallIcon from "~/assets/icons/phone-call.svg?react";
import BrushIcon from "~/assets/icons/brush.svg?react";
import CarIcon from "~/assets/icons/car.svg?react";

interface IStepsCard {
  id: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const StepsCardsData: IStepsCard[] = [
  {
    id: 1,
    Icon: DocumentIcon,
    title: "Заполнение заявки",
    description:
      "Вы оставляете заявку на нашем сайте, указывая необходимые детали",
  },
  {
    id: 2,
    Icon: PhoneCallIcon,
    title: "Связь с менеджером",
    description:
      "Наш менеджер оперативно связывается с вами для уточнения всех нюансов заказа",
  },
  {
    id: 3,
    Icon: BrushIcon,
    title: "Выезд и оказание услуг",
    description:
      'Мы приезжаем на указанный адрес, к указанному времени и выполняем заказанные услуги. Делаем фотоотчет "до и после" (по вашему согласию)',
  },
  {
    id: 4,
    Icon: CarIcon,
    title: "Оплата и обратная связь",
    description:
      "После завершения работ производится постоплата, вы получаете свой чистый автомобиль и приглашаетесь оставить отзыв о нашей работе",
  },
];
