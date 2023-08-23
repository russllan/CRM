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
            src={
              img ||
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt={brand}
            className={scss.img}
          />
        </div>
      </Link>
      <div className={scss.title}>
        <div className={scss.brand}>
          <span>{brand}</span> <br />
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
