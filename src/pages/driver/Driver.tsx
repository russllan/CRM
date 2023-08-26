import RentCard from "../../components/rentCard/RentCard";
import MainPlatinum from "../../components/Main/MainPlatinum";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import AboutProject from "../../components/aboutProject/AboutProject";
import "./Driver.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getCars } from "../../store/slices/carsSlice";
import { AppDispatch, RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarsType } from "../../types/index.dto";
import { Footer } from "../../components/footer/Footer";

const Driver = () => {
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
    <>
      <Header />
      <div className="container">
        <div className="mainPlatinum">
          <MainPlatinum />
        </div>
        <div className="containerWrapp">
          <div className="carousel">
            <div className="titles"><span className="span">Список доступных машин для аренды</span></div>
            <Carousel res={result} />
          </div>
          <div className="allCars">
            <div className="titles"><span onClick={() => navigate("/catalog")}>Все машины</span></div>
          </div>
          <div className="titles">
            <span className="span">Последние Аренды:</span>
          </div>
          <div className="driverCard">
            {renderRentCard}
            </div>
          <div className="aboutProject">
            <AboutProject />
          </div>

        </div>

      </div>
      <Footer/>

    </>
  );
};

export default Driver;
