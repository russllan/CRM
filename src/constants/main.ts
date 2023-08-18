import location from "../assets/main/Vector.svg";
import calendar from "../assets/main/Vector (1).svg";
import clock from "../assets/main/Vector (2).svg";
import ImgCar from "../assets/main/previuw.svg";
import { MainCard } from "../types/types";
import MainImg from "../assets/main/previuw.svg";
import { text } from "stream/consumers";
import car from "../assets/main/car.svg";
import business from "../assets/main/business.svg";
import job from "../assets/main/job.svg";
export const MainBtnArr = [
  {
    img: clock,
    text: "Дата выдачи:",
    type: "date",
  },
  {
    img: calendar,
    text: "Дата возраста:",
    type: "date",
  },
];
export const RenderSelectionArr = [
  {
    img: calendar,
    text: "Место выдачи:",
  },
];
export const SliderArr: MainCard[] = [
  {
    img: MainImg,
  },
  {
    img: MainImg,
  },
  {
    img: MainImg,
  },
  {
    img: MainImg,
  },
  {
    img: MainImg,
  },
  {
    img: MainImg,
  },
];
export const mainCard = [
  {
    img: car,
    paragraph: "Арендовать машину",
    title:
      "Финансовый мир очнулся: семантический разбор внешних противодействий развеял последние сомнения",
  },
  {
    img: business,
    paragraph: "Стать партнером",
    title:
      "Финансовый мир очнулся: семантический разбор внешних противодействий развеял последние сомнения",
  },
  {
    img: job,
    paragraph: "Вакансии",
    title:
      "Финансовый мир очнулся: семантический разбор внешних противодействий развеял последние сомнения",
  },
];
