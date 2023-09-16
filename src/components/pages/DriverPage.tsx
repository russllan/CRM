import React from "react";
import { RouteType } from "../../constants/routes";
// import { useSelector } from "react-redux";
// import { AuthState } from "../../store";
import { Route, Routes } from "react-router-dom";
import Driver from "../../pages/driver/Driver";
import SignIn from "../signIn/SignIn";
import DetailsPage from "../../pages/details/DetailsPage";
import CatalogPage from "../../pages/catalog/CatalogPage";
import Admin from "../../pages/admin/Admin";
import { AddCar } from "../../adminComponents/addCar/AddCar";
import { AddDriver } from "../../adminComponents/addDriver/AddDriver";

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
      <Routes>
        {routes.map(renderComponent)}
        <Route path="/driver" element={<Driver />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="addCar" element={<AddCar />} />
        <Route path="addDriver" element={<AddDriver />} />


      </Routes>
    </div>
  );
};

export default DriverPage;
