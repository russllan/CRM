import { Button } from "../../UI/button/Button";
import "./Header.scss";

export const Header = () => {
  return (
   <>
    <div className="contaynerHeader">
      <span className="PlatinumPark">Platinum Park</span>
      <div>
        <Button>Главная</Button>
        <Button>Каталог</Button>
        <Button >Контакты</Button>
        <Button>Войти</Button>

      </div>
    </div>
    <hr />
    </>

  );
};
