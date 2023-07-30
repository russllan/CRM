import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import { ScrollbarOptions } from "swiper/types/modules/scrollbar";
import { useMemo } from "react";
import styles from "./MainPlatinum.module.scss";
import { MainBtnArr, RenderSelectionArr, SliderArr } from "../../constants/main";
import { PaginationOptions } from "swiper/types/modules/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cars, getCars } from "../../store/slices/carsSlice";
import { AppDispatch, RootState } from "../../store";
import Button from './../../button/Button';
interface MySwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  modules?: [
    typeof Pagination,
    typeof A11y
  ];
  pagination?: PaginationOptions;
}
const MainPlatinum: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.cars);
  useEffect(() => {
    dispatch(getCars());
    console.log("rendering!!!");
    console.log(result);
  }, []);
  const swiperProps: MySwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    modules: [Pagination,  A11y],
    pagination: { 
      clickable: true,
    },
  };
  const renderInt = useMemo(
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
  const Sliderd = useMemo(
    () =>
      SliderArr.map((item, index) => (
        <SwiperSlide>
          <div className={styles.container} key={`${item}_${index}`}>
            <img className={styles.main__bg} src={item.img} alt="work__icons" />
          </div>
        </SwiperSlide>
      )),
    [SliderArr]
  );
  const renderSelection = useMemo(
    () =>
    RenderSelectionArr.map((item, index) => (
        <div className={styles.input__bg} key={`${item}_${index}`}>
          <img src={item.img} alt="work__icons" />
          <select className={styles.selector} name="select__btn" id="selection" placeholder={item.text}>
            <option value="0">Выберите Машину</option>
            <option value="0" >woeoqjnf</option>
          </select>
       
        </div>
      )),
    [MainBtnArr]
  );
  return (
    <section className={styles.main__platinum}>
      <div className="container">
          <div className={styles.swiper}>
            <Swiper {...swiperProps}>
              <div>{Sliderd}</div>
            </Swiper>
          </div>
          <div className={styles.main__inputs}>
          {renderSelection}
          {renderInt}
        </div>
        <div className={styles.main__submit_btn}>
          <Button  title="Отправить"  />
        </div>
        </div>
    </section>
  );
};

export default MainPlatinum;
