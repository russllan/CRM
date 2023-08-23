import { useState, FC, useEffect } from "react";
import signinCar from "../../assets/images/car.svg";
import { Button } from "../../UI/button/Button";
import { Link } from "react-router-dom";
import "../signIn/SignIn.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { postAuth, refreshAuth } from "../../store/slices/authSlice";

const SignIn: FC = () => {
  const [Error, setError] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userData = {
    username: login,
    password: password,
  };

  const { result } = useSelector((state: RootState) => state.auth.user);
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  const sending = () => {
    dispatch(postAuth(userData));
  };

  if (isLoading) {
    return <div>...Loading</div>;
  }

  console.log(result);
  
    if (error) {
      // const refresh = localStorage.getItem("token");
      // if (refresh !== null) {
      //   const parsedRefresh = JSON.parse(refresh);
      //   if (Object.keys(parsedRefresh).length === 0) {
      //     return <div>Авторизуйтесь!!!</div>;
      //   }
      //    else {
      //     dispatch(refreshAuth(parsedRefresh.refresh))
      //   }
      // }  
    }

  

  return (
    <>
      <div className="container">
        <div className="loginPageContayner">
          <div className="PlatinumPark">
            <h1>Platinum Park</h1>
          </div>
          <div className="loginPage">
            <div>
              <p className="signin">Войти</p>
            </div>
            <div className="forms">
              <label htmlFor="">логин</label>
              <input
                className={error ? "inputError" : "input"}
                type="text"
                value={login}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLogin(e.target.value)
                }
              />
              <label htmlFor="">пароль</label>
              <input
                className={error ? "inputError" : "input"}
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <button onClick={sending}> Продолжить</button>
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

export default SignIn;