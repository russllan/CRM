import React from "react";
import signinCar from "../../../assets/images/signIn.png";
import { Button } from "../../../UI/button/Button";
import "../../signIn/restore/ReStore.scss";
import "../../signIn/SignIn.scss";

export const Restore = () => {
  return (
    <div className="contayner">
      <img className="imgCar" src={signinCar} alt="signinCar" />
      <div className="loginPage">
        <p className="forgotpassword">Забыли пароль?</p>
        <p>Введите адрес электронной почты, чтобы получить ссылку для восстановления пароля.</p>
        <form>
        <label htmlFor="">email</label>
        <input type="email" />

        <Button>Восстановить </Button>
        <a href="./">Вернуться к авторизации</a>
        </form>
     
    
      </div>
      <h1>Platinum Park</h1>
    </div>
  );
};
