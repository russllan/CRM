import React from 'react'
import styles from "./Selection.module.scss"
import { AppDispatch, RootState } from "../store";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MainBtnArr, RenderSelectionArr } from '../constants/main';
import { useMemo } from 'react';
import Button from '../button/Button';
interface PropsType{
}
const SelectionForm: React.FC<PropsType> = ({ }) =>  {
    const dispatch: AppDispatch = useDispatch();
    const { result } = useSelector((state: RootState) => state.cars.cars);
    const renderDate = useMemo(
        () =>
          MainBtnArr.map((item, index) => (
            <div className={styles.input__bg} key={`${item}_${index}`}>
              <img src={item.img} alt="work__icons" />
              <input
                type={item.type}
                name="search__btn"
                id="btn__search"
                placeholder={item.text}
              />
            </div>
          )),
        [MainBtnArr]
      );
      const renderSelection = useMemo(
        () =>
          RenderSelectionArr.map((item, index) => (
            <div className={styles.input__bg} key={`${item}_${index}`}>
              <img src={item.img} alt="work__icons" />
              <select className={styles.selector} name="select__btn" id="selection" placeholder={item.text}>
              <option>Место выдачи:</option>
                {result.map((item) => (
                  <option key={item.brand}>{item.brand}</option>
                ))}
              </select>
              
            </div>
          )),
        [RenderSelectionArr, result]
      );
  return (
    <form className={styles.form}>
    <div className={styles.form__inputs}>
  {renderSelection}
  {renderDate}
  </div>
  <div className={styles.main__submit_btn}>
          <Button   title="Отправить"  />
        </div>
  </form>
  )
}

export default SelectionForm