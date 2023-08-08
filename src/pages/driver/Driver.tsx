import { Header } from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import RentCard from "../../components/rentCard/RentCard";
import AboutProject from "../../components/aboutProject/AboutProject";

import "./Driver.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCars } from "../../store/slices/carsSlice";
import { AppDispatch, RootState } from "../../store";
import { CarsType } from "../../types/index.dto";
import { useNavigate } from "react-router-dom";

const Driver = () => {
  const [isCars, setCars] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.cars);
  console.log(result);

  useEffect(() => {
    dispatch(getCars());
    console.log(result);
  }, []);

  function compareDates(a: CarsType, b: CarsType): number {
    return (
      new Date(b.last_checking).getTime() - new Date(a.last_checking).getTime()
    );
  }

  const sortedCars = useMemo(() => result.slice().sort(compareDates), [result]);
  const lastFourCarRents: CarsType[] = useMemo(
    () => sortedCars.slice(0, 4),
    [sortedCars]
  );

  const renderRentCard = useMemo(
    () =>
      lastFourCarRents.map((item) => (
        <RentCard
          key={item.image1}
          img={item.image1}
          name={item.brand}
          date={item.last_checking}
        />
      )),
    [lastFourCarRents]
  );

  return (
    <div className="container">
      <Header />
      <div><span className="span">Список доступных машин для аренды</span></div>
      <div className="carousel">
        <Carousel res={result} />
      </div>
      <div className="allCars"><span onClick={() => navigate("/catalog")}>Все машины</span></div>
      <div><span className="span">Последние Аренды:</span></div>
      <div className="driverCard">{renderRentCard}</div>
      <div>
        <AboutProject />
      </div>
    </div>
  );
};

export default Driver;
