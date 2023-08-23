import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { useMemo } from "react";
import styles from "./MainPlatinum.module.scss";
import {
  MainBtnArr,
  RenderSelectionArr,
  SliderArr,
  mainCard,
} from "../../constants/main";
import { PaginationOptions } from "swiper/types/modules/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cars, getCars } from "../../store/slices/carsSlice";
import { AppDispatch, RootState } from "../../store";
import Button from "./../../button/Button";
import SelectionForm from "../../selections/Selection";
interface MySwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  modules?: [typeof Pagination, typeof A11y];
  pagination?: PaginationOptions;
}
const MainPlatinum: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { result } = useSelector((state: RootState) => state.cars.cars);
  useEffect(() => {
    dispatch(getCars());
  }, []);
  console.log(result);
  const swiperProps: MySwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    modules: [Pagination, A11y],
    pagination: {
      paginationDisabledClass: "swiper-pagination-bullet",
      clickable: true,
    },
  };
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
  const RenderCardsInfo = useMemo(
    () =>
      mainCard.map((item) => (
        <div className={styles.info__card}>
          <div className={styles.card__img}>
            <img src={item.img} alt="" />
            <h1>{item.paragraph}</h1>
          </div>
          <div className={styles.main__submit_btn}>
            <p>{item.title}</p>
            <Button title="Отправить заявку" />
          </div>
        </div>
      )),
    [mainCard]
  );
  return (
    <section className={styles.main__platinum}>
      <div className={styles.main__swiper}>
        <Swiper {...swiperProps}>
          <div>{SliderInfo}</div>
        </Swiper>
      </div>
      <div className={styles.main__card}>{RenderCardsInfo}</div>
    </section>
  );
};

export default MainPlatinum;
