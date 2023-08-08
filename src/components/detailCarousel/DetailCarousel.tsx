import { useMemo } from "react";
import scss from "./DetailCarousel.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { data } from "../../constants/carouselCard";

function DetailCarousel() {
  const renderCarousel = useMemo(
    () =>
      data?.map((item) => (
        <div className={scss.wrapper} key={item.id}>
          <img className={scss.img} src={item.img} alt={item.title}/>
        </div>
      )),
    [data]
  );

  return (
    <div className={scss.DetailCarousel}>
      <Carousel className={scss.carousel}>{renderCarousel}</Carousel>
    </div>
  );
}

export default DetailCarousel;
