import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import { Key, useMemo } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import scss from "./Carousel.module.scss";
import { CarouselCard } from "../../types/types";
import { CarsType } from "../../types/index.dto";

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

interface CarouselProps {
  res: CarsType[];
}

const Carousel: React.FC<CarouselProps> = ({ res }) => {
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
              res.map((item) => (
                <div key={item.id}>
                  <SwiperSlide>
                    <div className={scss.wrapperImg}>
                      <img src={item.image1} alt={item.brand} />
                    </div>
                    <div>{item.brand || ""}</div>
                  </SwiperSlide>
                </div>
              )),
            [res]
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
