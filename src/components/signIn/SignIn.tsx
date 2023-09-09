import { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";
import scss from "./SignIn.module.scss";
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
      <div className={scss.contayner}>
        <div className={scss.loginCar}>
          <div className={scss.PlatinumPark}>
            <span className={scss.welcome}>Добро пожаловать в</span>
            <span className={scss.logoLink} >
              Platinum Park
            </span>
          </div>
        </div>

        <div className={scss.loginPageContayner}>
          <div className={scss.loginPage}>
            <div>
              <p className={scss.signin}>Войти</p>
            </div>
            <div className={scss.forms}>
              <div className={scss.inputWrapper}>
                <label htmlFor="">логин</label>
                <input
                  // className={error ? "inputError" : "input"}
                  className={scss.input }
                  type="text"
                  value={login}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLogin(e.target.value)
                  }
                />
              </div>
              {Error ? (
                <div className={scss.inputWrapper}>
                  <label className={scss.errorLabel} htmlFor="">логин</label>
                  <input
                    className={scss.inputError}
                  
                  />
                </div>
              ) : null}
              
              <div className={scss.inputWrapper}>
                <label htmlFor="">пароль</label>
                <input
                  className={scss.input}
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>

              <label htmlFor="">Забыли пароль?</label>
              <button className={scss.signInBtn} onClick={sending}>
                {" "}
                Войти{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
