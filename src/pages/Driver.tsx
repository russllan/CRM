import { Header } from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import DriverCard from "../components/driverCard/DriverCard";

import { data } from "../constants/carouselCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cars, getCars } from "../store/slices/carsSlice";
import { AppDispatch, RootState } from "../store";
import { CarsType } from "../types/index.dto";
import AboutProject from "../components/aboutProject/AboutProject";

const Driver = () => {
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.cars);

  useEffect(() => {
    dispatch(getCars());
    console.log("rendering!!!");
    console.log(result);
  }, []);

  console.log(result);

  return (
    <div className="contayner">
      <Header />
      <div>
        <Carousel res={result} />
      </div>
      <div>
        <DriverCard />
        <DriverCard />
        <DriverCard />
        <DriverCard />
      </div>
      <div>
        <AboutProject />
      </div>
    </div>
  );
};

export default Driver;
