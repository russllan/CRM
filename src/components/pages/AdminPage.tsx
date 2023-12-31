import React from "react";
import { RouteType } from "../../constants/routes";
// import { useSelector } from "react-redux";
// import { AuthState } from "../../store";
import { Route, Routes } from "react-router-dom";
import Admin from "../../pages/admin/Admin";
import { AddCar } from "../../adminComponents/addCar/AddCar";

interface PropsTypes {
  routes: RouteType[];
}

const AdminPage: React.FC<PropsTypes> = ({ routes }) => {
  // const { isAuth } = useSelector((state: AuthState) => state.root);

  const renderComponent = ({ path, Page }: RouteType) => (
    <Route key={path} path={path} element={<Page />} />
  );

  return (
    <div>
      <Routes>
        {routes.map(renderComponent)}
        <Route path="/admin" element={<Admin />} />
        <Route path="addCar" element={<AddCar />} />
        

        {/* <Route path="/addDriver" element={<AddCar />} /> */}


      </Routes>
    </div>
  );
};

export default AdminPage;
