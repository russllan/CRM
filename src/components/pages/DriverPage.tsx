import React from "react";
import {  RouteType } from "../../constants/routes";
// import { useSelector } from "react-redux";
// import { AuthState } from "../../store";
import { Route, Routes } from "react-router-dom";
import Driver from "../../pages/Driver";

interface PropsTypes {
  routes: RouteType[];
}

const DriverPage: React.FC<PropsTypes> = ({ routes }) => {
  // const { isAuth } = useSelector((state: AuthState) => state.root);

  const renderComponent = ({ path, Page }: RouteType) => (
    <Route key={path} path={path} element={<Page />} />

  );

  return (
    <div>
      <Routes>{routes.map(renderComponent)}
      <Route  path='/driver' element={<Driver />} />
      </Routes>
      
    </div>
  );
};

export default DriverPage;
