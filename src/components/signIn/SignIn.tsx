
import { useState } from "react";
import signinCar from "../../assets/images/signIn.png";
import { Button } from "../../UI/button/Button";
import { Link} from "react-router-dom"
import "../signIn/SignIn.scss"

export const SignIn = () => {
const [error,setError]=useState('')

  return (
    <div className="contayner">
      <img className="imgCar" src={signinCar} alt="" />

      <div className="loginPage">
        <p className="signin">Войти</p>
        <form>
          <label htmlFor="">логин</label>
          <input type="text" />
          <label htmlFor="">пароль</label>
          <input type="password" />
          {error && <p>{error}</p>}
          <Button> Продолжить</Button>
       
        </form>

        <div className="restore">
          <p>Забыли пароль?</p>{" "}
          <Link className="link-route" to="/restore">
            Восстановить
          </Link>
        </div>
      </div>
      <h1>Platinum Park</h1>
    </div>
  );
};
