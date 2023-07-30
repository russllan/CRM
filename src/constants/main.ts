import location from "../assets/main/Vector.svg";
import calendar from "../assets/main/Vector (1).svg";
import clock from "../assets/main/Vector (2).svg";
import ImgCar from "../assets/main/previuw.svg";
import { MainCard } from "../types/types";
import MainImg from "../assets/main/previuw.svg";
import { text } from "stream/consumers";
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
    img: location,
    text: "Выберите машину ",
  },
  {
    img: calendar,
    text: "Место выдачи:",
  },
]
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
