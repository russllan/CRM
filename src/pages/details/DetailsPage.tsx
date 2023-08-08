import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getCar } from "../../store/slices/carsSlice";

import scss from "./Details.module.scss";
import DetailCarousel from "../../components/detailCarousel/DetailCarousel";

interface ParamsType {
  id: number;
}

const DetailsPage: React.FC = () => {
  const { id } = useParams() as unknown as ParamsType;
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.car);

 
  
  useEffect(() => {
    dispatch(getCar(id));
  }, []);

  console.log(result);

  return <div className={scss.Details}>
    <DetailCarousel />
  </div>;
};

export default DetailsPage;
