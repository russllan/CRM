import React, {  FC } from "react";
import { dataBaseCard } from "../../../constants/dataBaseCard";
import scss from '../skeleton.module.scss'
export const DataBase: FC = () => {


  return (
    <div>
      <div className={scss.selectWrapp}>
        <p>Сортировать: </p>{" "}

        <select className={scss.selectMy} name="" id="">
          
          <option className={scss.optionss} value="Последние">Последние 7 дней</option>
          <option  className={scss.optionss} value="Последние">Последние 7 дней</option>
          <option  className={scss.optionss} value="Последние">Последние 7 дней</option>
        </select>
      </div>


      <div className={scss.cardWrap}>
        {dataBaseCard.map((item) => (
          <ul className={scss.card}>
            <img src={item.icon} alt="icon" />
            <li >{item.text}</li>
            <li className={scss.sum}>{item.sum}</li>
            <li>{item.strategy}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
