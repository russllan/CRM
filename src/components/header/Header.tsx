import { Button } from "../../UI/button/Button";
import "./Header.scss";
export const Header = () => {
  return (
    <>
      <div className="contaynerHeader">
        <span className="PlatinumPark">Platinum Park</span>
        <div>
          <Button button="button">Aрендовать</Button>
          <Button button="button">Контакты</Button>
          <Button button="button">Войти</Button>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};
