import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import { useMemo } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { data } from "../../constants/carouselCard";

import scss from "./Carousel.module.scss";

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
}

const Carousel: React.FC = () => {
  const swiperProps: MySwiperProps = {
    spaceBetween: 10,
    slidesPerView: 4,
    modules: [Navigation, Pagination, Scrollbar, A11y],
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
  };
  return (
    <div className={scss.swiper}>
      <div className={`arrow-prev ${scss.myCustomClass}`}>
        <img
          className={scss.arrow}
          src="/images/arrow-left.svg"
          alt="Arrow left"
        />
      </div>
      <Swiper {...swiperProps}>
        <div>
          {useMemo(
            () =>
              data.map((item) => (
                <div key={item.id}>
                  <SwiperSlide>
                    <div className={scss.wrapperImg}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div>{item.title || ""}</div>
                  </SwiperSlide>
                </div>
              )),
            [data]
          )}
        </div>
      </Swiper>
      <div className={`arrow-next ${scss.myCustomClass}`}>
        <img
          className={scss.arrow}
          src="/images/arrow-right.svg"
          alt="Arrow right"
        />
      </div>
    </div>
  );
};

export default Carousel;
