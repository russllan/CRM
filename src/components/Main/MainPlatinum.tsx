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
import { MainBtnArr, SliderArr } from "../../constants/main";
import { PaginationOptions } from "swiper/types/modules/pagination";
import { Button } from "./../../UI/button/Button";

interface MySwiperProps {
  spaceBetween: number;
  slidesPerView: number;
  modules?: [
    typeof Navigation,
    typeof Pagination,
    typeof Scrollbar,
    typeof A11y
  ];
  navigation?: NavigationOptions;
  scrollbar?: ScrollbarOptions;
  pagination?: PaginationOptions;
}
const MainPlatinum: React.FC = () => {
  const swiperProps: MySwiperProps = {
    spaceBetween: 10,
    slidesPerView: 1,
    modules: [Navigation, Pagination, Scrollbar, A11y],
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
    scrollbar: { draggable: true },
    pagination: { clickable: true },
  };
  const renderInt = useMemo(
    () =>
      MainBtnArr.map((item, index) => (
        <div className={styles.input__bg} key={`${item}_${index}`}>
          <img src={item.img} alt="work__icons" />
          <input
            type="search"
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
  return (
    <section className={styles.main__platinum}>
      <div className="container">
        <div className={styles.main__inputs}>{renderInt}</div>
        <div className={styles.main__submit_btn}>
          <Button btn="btn" children="Отправить" button="" />
        </div>
        <div>
          <div className={styles.swiper}>
            <Swiper {...swiperProps}>
              <div>{Sliderd}</div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPlatinum;
