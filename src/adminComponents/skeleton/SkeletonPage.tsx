import { useState } from "react";
import scss from "./skeleton.module.scss";
import { DataBase } from "./dataBase/DataBase";
import { DriverItems } from "./driverItems/DriverItems";
import { Cars } from "./car/Cars";
import { Settings } from "./settings/Settings";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SkeletonPage = () => {
  const navigate = useNavigate();

  const [showCarInput, setShowCarInput] = useState(false);
  const [currentPage, setCurrentPage] = useState("База данных");
  const [showButtons, setShowButtons] = useState(true); 

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleDriverItems = (page: string) => {
    setCurrentPage(page);
    setShowCarInput(true);
    setShowButtons(false);
  };

  const handleDataBase = (page: string) => {
    setCurrentPage(page);
    setShowButtons(true);
    setShowCarInput(false);
  };

  return (
    < div className={scss.skeleton}>
      <div className={scss.desktopWrapper}>
        <div>
          <p>Административная панель</p>
          <h2 className={scss.platinumPark}>Рабочий стол</h2>
        </div>
        {/* {showCarInput ? <input className={scss.inputSearch} type="text" /> : null} */}


        {showButtons && (
          <div>
            <Link to ='addCar' className={scss.addCAr}>
              Добавить Автомобиль
            </Link>{" "}
            <button
              onClick={() => navigate("/addDriver")}
              className={scss.addCAr}
            >
              Добавить Водителя
            </button>
          </div>
        )}
      </div>
      <div className={scss.contayner}>
        <nav>
          <button  onClick={() => handleDataBase("База данных")}>
            База данных
          </button>
          <button onClick={() => handleDriverItems("Список водителей")}>
            Список водителей
          </button>
          <button onClick={() => handleDriverItems("Машины")}>Машины</button>

          <button onClick={() => handlePageChange("Настройки")}>
            Настройки
          </button>
        </nav>

        {currentPage === "База данных" && <DataBase />}
        {currentPage === "Список водителей" && <DriverItems />}
        {currentPage === "Машины" && <Cars />}
        {currentPage === "Настройки" && <Settings />}
      </div>
    </div>
  );
};

export default SkeletonPage;
