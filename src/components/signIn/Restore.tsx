import React from "react";
import { Button } from "../../UI/button/Button";
import "../signIn/SignIn.scss";
import { Link } from "react-router-dom";

export const Restore = () => {
  return (
    <div className="contayner">
      <div
        // style={{ backgroundImage: `url(${signinCar})` }}
        className="loginPageContayner"
      >
        <div className="PlatinumPark">
          <h1>Platinum Park</h1>
        </div>

        <div className="loginPage">
          <div className="wrapperRestore">
        
          <span className="forgotpassword">Забыли пароль?</span>
  
      
         <span>
                Введите адрес электронной почты, чтобы получить ссылку для
                восстановления пароля.
              </span>
          

            <div className="formInput">
          
                <label>email</label>
                <input type="email" />
      
            </div>
          
         </div>
            <div className="bottomPrt">
              <div>
                <Button>Восстановить пароль </Button>
              </div>
              <div>
                <Link className="restoreAuth" to="/">
                  Вернуться к авторизации
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};
