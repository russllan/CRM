import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
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
  }, []);
  console.log(result);
  const swiperProps: MySwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    modules: [Pagination,  A11y],
    pagination: { 
      paginationDisabledClass: "swiper-pagination-bullet",
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
  const SliderInfo = useMemo(
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
            {result.map((item) => (
              <option key={item.brand}>{item.brand}</option>
            ))}
          </select>
        </div>
      )),
    [MainBtnArr, result]
  );
  return (
    <section className={styles.main__platinum}>
          <div className={styles.main__swiper}>
            <Swiper {...swiperProps}>
              <div>{SliderInfo}</div>
            </Swiper>
          </div>
          <div className={styles.form}>
          <div className={styles.main__inputs}>
          {renderSelection}
          {renderInt}
        </div>
        </div>
        <div className={styles.main__submit_btn}>
          <Button   title="Отправить"  />
        </div>
    </section>
  );
};

export default MainPlatinum;
