import { FC, useMemo } from "react";
import "./Header.scss";
import { data } from "../../constants/haeder";

const Header: FC = () => {
  const renderTitle = useMemo(
    () => data.map((item) => <button className="btn">{item.title}</button>),
    [data]
  );

  return (
    <>
      <div className="contaynerHeader">
        <span className="PlatinumPark">Platinum Park</span>
        <div className="wrapperBtn">
          {renderTitle}
          <button className="signIn">Войти</button>
        </div>
      </div>
    </>
  );
};

export default Header;
