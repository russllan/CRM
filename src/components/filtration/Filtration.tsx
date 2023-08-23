import { useState, FC, useMemo } from "react";

import { CarouselCard } from "../../types/types";

import { ModalData } from "../../constants/modalData";
import Modal from "../modal/Modal";

import scss from "./Filtration.module.scss";
import CarCard from "../carCard/CarCard";
import { CarsType } from "../../types/index.dto";

interface PropsType {
  data: CarsType[];
}

const Filtration: FC<PropsType> = ({ data }) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [newData, setData] = useState<CarsType[]>(data);
  const [inputValue, setInputValue] = useState<string[]>([]);

  const renderModalTitle = useMemo(
    () =>
      ModalData.map((item) => (
        <div className={scss.modal} key={item.title}>
          <input
            className={scss.checkbox}
            type="checkbox"
            value={item.title}
            onChange={(event) => handleCheckboxChange(event)}
          />
          <span>{item.title}</span>
        </div>
      )),
    [ModalData]
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue((prevSelected) => {
      const updatedCheckboxes = event.target.checked
        ? [...prevSelected, value]
        : prevSelected.filter((item) => item !== value);

      sortByMark(updatedCheckboxes);
      return updatedCheckboxes;
    });
  };

  const renderCarsCard = useMemo(
    () =>
      newData?.map((item) => (
        <CarCard
          img={item.image1}
          brand={item.brand}
          model={item.model}
          price={item.price_by_day}
          id={item.id}
        />
      )),
    [newData]
  );

  const sortByMark = (checkbox: string[]) => {
    const filteredData = data.filter((item) => checkbox.includes(item.model));
    const sortedData = [...filteredData].sort((a, b) =>
      a.model.localeCompare(b.model)
    );
    sortedData.length === 0 ? setData(data) : setData(sortedData);
  };

  const sortByName = () => {
    const sortedData = [...data].sort((a, b) => a.brand.localeCompare(b.brand));
    setData(sortedData);
  };

  const sortByAscendingPrice = () => {
    const sortedData = [...data].sort((a, b) => Number(a.price_by_day) - Number(b.price_by_day));
    setData(sortedData);
  };

  const sortByDescendingPrice = () => {
    const sortedData = [...data].sort((a, b) => Number(b.price_by_day) - Number(a.price_by_day));
    setData(sortedData);
  };

  return (
    <div className={scss.Filtration}>
      <div className={scss.catalogFilter}>
        <span className={scss.filter}>Фильтрация</span>
        <span className={scss.total}>(Всего {data.length} машин):</span>
      </div>
      <div>
        <button className={`btnPrimary`} onClick={() => setActive(!isActive)}>
          По марке
          <img
            className={isActive ? scss.arrowImgTrue : scss.arrowImg}
            src="/images/arrow-down.svg"
            alt="arrow down"
          />
        </button>
        <button onClick={sortByName} className={`btnPrimary`}>
          По названию
        </button>
        <button onClick={sortByAscendingPrice} className={`btnPrimary`}>
          По возрастанию цен
        </button>
        <button onClick={sortByDescendingPrice} className={`btnPrimary`}>
          По снижении цен
        </button>
        {isActive ? (
          <div className={scss.wrapperModal}>
            <Modal isActive={isActive}>{renderModalTitle}</Modal>
          </div>
        ) : null}
      </div>
      <div className={scss.allCars} onClick={() => setActive(false)}>{renderCarsCard}</div>
    </div>
  );
};

export default Filtration;
