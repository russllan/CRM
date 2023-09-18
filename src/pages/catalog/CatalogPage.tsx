import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import scss from "./CatalogPage.module.scss";
import Header from "../../components/header/Header";
import { AppDispatch, RootState } from "../../store";
import { getCars } from "../../store/slices/carsSlice";
import Filtration from "../../components/filtration/Filtration";

const CatalogPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.cars);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className={scss.CatalogPage}>
      <div>
        <Header />
      </div>
      <div>
        <Filtration data={result} />
      </div>
    </div>
  );
};

export default CatalogPage;
