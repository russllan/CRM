import profit from "../assets/icons/прибыль.svg";
import car from "../assets/icons/машин.svg";
import rent from "../assets/icons/дата аренды.svg";
import drivers from "../assets/icons/водителя.svg";
import { DataBaseCard } from "../types/types";

export const dataBaseCard:DataBaseCard[] = [
  {
    icon: profit,
    text: "Прибль",
    sum: 0,
    strategy: "12% больше за последний месяц",
  },
  {
    icon: car,
    text: "Машин",
    sum: 34,
    strategy: "10 машины свободны",
  },
  {
    icon: rent,
    text: "Дата общей аренды машин",
    sum: 344,
    strategy: "12% больше за последний месяц",
  },
  {
    icon: drivers,
    text: "Всего Водителей",
    sum: 33,
    strategy: "20 водителей за месяц",
  },
];
