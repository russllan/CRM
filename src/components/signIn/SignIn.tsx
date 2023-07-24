import { useState } from "react";
import signinCar from "../../assets/images/car.svg";
import { Button } from "../../UI/button/Button";
import { Link } from "react-router-dom";
import "../signIn/SignIn.scss";

export const SignIn = () => {
  const [error, setError] = useState("");

  return (
    <>
      <div className="contayner">
        <div
          // style={{ background: `url(${signinCar})` }}
          className="loginPageContayner"
        >
          <div className="PlatinumPark">
            <h1>Platinum Park</h1>
          </div>

          <div className="loginPage">
            <div>
              <p className="signin">Войти</p>
            </div>
            <div className="forms">
              <form>
                <label htmlFor="">логин</label>
                <input className="input" type="text" />
                <label htmlFor="">пароль</label>
                <input type="password" />
                {error && <p>{error}</p>}
                <Button> Продолжить</Button>
              </form>
            </div>
            <div className="restore">
              <p>Забыли пароль?</p>{" "}
              <Link className="link-route" to="/restore">
                Восстановить
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
