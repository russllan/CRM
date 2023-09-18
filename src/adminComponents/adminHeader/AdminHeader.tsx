
import { Link } from "react-router-dom";
import search from "../../assets/icons/searchh.svg";
import scss from './AdminHeader.module.scss'
import { useMemo } from "react";
import { data } from '../../constants/adminHeader';

export const AdminHeader = () => {
  const renderTitle = useMemo(
    () =>
      data.map((item) => (
        <Link to={item.route} className={scss.btn}>
          {item.title}
        </Link>
      )),
    [data]
  );
  return (
    <>
      <header className={scss.adminHeader}>
        <Link to={"/"} className={scss.platinumPark}>
          Platinum Park
        </Link>

        <div className={scss.wrapper}>
          {/* <Link to="/addCar"> <button  className={scss.addCAr}>Добавить Автомобиль</button></Link>
          <Link to="/addDriver"> <button  className={scss.addCAr}>Добавить Водителя</button></Link> */}
          {renderTitle}
          <div>
          <img src={search} alt="search" />

          </div>

        </div>
      </header>
    </>
  );
};
