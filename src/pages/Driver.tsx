import MainPlatinum from "../components/Main/MainPlatinum";
import { Header } from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import DriverCard from "../components/driverCard/DriverCard";
import AboutProject from "../components/aboutProject/AboutProject";
import "./Driver.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getCars } from "../store/slices/carsSlice";
import { AppDispatch, RootState } from "../store";
import "bootstrap/dist/css/bootstrap.min.css"
import { CarsType } from "../types/index.dto";
import CustomSideBar from "../components/side-bar/SideBar";

const Driver = () => {
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

  const renderDriverCard = useMemo(
    () =>
      lastFourCarRents.map((item) => (
        <DriverCard
          img={item.image1}
          name={item.brand}
          date={item.last_checking}
        />
      )),
    [lastFourCarRents]
  );

  return (
 <>
   <Header/>
   <hr/>
   <div className="container">
   <MainPlatinum/>
    </div>
    </>
  );
};

export default Driver;
