import { useMemo } from "react";

import scss from "./Carousel.module.scss";
import { CarsType } from "../../types/index.dto";
import CarCard from "../carCard/CarCard";

interface CarouselProps {
  res: CarsType[];
}

const Carousel: React.FC<CarouselProps> = ({ res }) => {

  const renderCarousel = useMemo(
    () =>
      res?.filter((item) => !item.is_busy).slice(0, 3).map((item) => (
        <div className={scss.wrSlide} key={item.id}>
            <CarCard
              brand={item.brand}
              img={item.image1}
              model={item.model}
              price={item.price_by_day}
              id={item.id}
            />
        </div>
      )),
    [res]
  );

  return (
    <div className={scss.swiper}>
      {renderCarousel}
    </div>
  );
};

export default Carousel;
