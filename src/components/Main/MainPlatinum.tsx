import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import {ScrollbarOptions} from "swiper/types/modules/scrollbar"
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./MainPlatinum.module.scss";
import { MainBtnArr, SliderArr } from "../../constants/main";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../../button/Button";
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
      scrollbar:{draggable:true}
      
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
    []
  );
  const Slider = useMemo(
    () =>
      SliderArr.map((item, index) => (
        <div className={styles.bg} key={`${item}_${index}`}>
          <img src={item.img} alt="work__icons" />
        </div>
      )),
    []
  );
  return (
    <section className={styles.main__platinum}>
      <div className="container">
        <div className={styles.main__inputs}>{renderInt}</div>
        <div className={styles.main__submit_btn}>
          <Button title="Отправить" />
        </div>
        <div >
          <Swiper {...swiperProps}>
            <div>
            <SwiperSlide>
              {Slider}
              </SwiperSlide>
              </div>
          </Swiper>
          <div className={`arrow-next ${styles.myCustomClass}`}>
        <img
          className={styles.arrow}
          src="/images/arrow-right.svg"
          alt="Arrow right"
        />
      </div>
        </div>
      </div>
    
    </section>
  );
};

export default MainPlatinum;
