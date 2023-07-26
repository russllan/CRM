import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { NavigationOptions } from "swiper/types/modules/navigation";
import { useMemo } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import scss from "./Carousel.module.scss";
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
    slidesPerView: res.length,
    modules: [Navigation, Pagination, Scrollbar, A11y],
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
  };

  const renderCarousel = useMemo(
    () =>
      res?.map((item, index) => (
        <div className={scss.wrSlide} key={item.id}>
          <SwiperSlide>
            <div className={scss.wrapperImg}>
              <img src={`${item[`image${index + 1}`] || "/images/car.svg"}`} alt={item.brand} className={scss.img} />
            </div>
            <div>{item.brand || ""}</div>
          </SwiperSlide>
        </div>
      )),
    [res]
  );

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
        {renderCarousel}
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
