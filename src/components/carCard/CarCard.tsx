import { Link } from "react-router-dom";
import scss from "./CarCard.module.scss";

interface PropsType {
  img?: string;
  brand: string;
  model: string;
  price: string | number;
  id?: number;
}

const CarCard: React.FC<PropsType> = ({ img, brand, model, price, id }) => {
  return (
    <div className={scss.CarCard}>
      <Link to={`/details/${id}`}>
        <div className={scss.wrapperImg}>
          <img
            src={img || "/images/car.svg"}
            alt={brand}
            className={scss.img}
          />
        </div>
      </Link>
      <div className={scss.title}>
        <div className={scss.brand}>
          <span>{"FORD MUSTAN "}</span> <br />
          {model}
        </div>
        <div className={scss.price}>
          <span>{price} KGS\Неделя</span> <br /> Bishkek
        </div>
      </div>
    </div>
  );
};

export default CarCard;
