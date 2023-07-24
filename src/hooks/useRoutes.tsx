import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Page from "../components/pages/DriverPage";
import { AdminRoutes, DriverRoutes } from "../constants/routes";

const useRoutes = (): ReactNode => {
  const { data } = useSelector((state: RootState) => state.auth);
  const role = data?.role; // 'driver' | 'shipper'

  // if(!isAuth) return <Page routes={notAuthRoutes} />;
  if (role) {
    if (role === "driver") return <Page routes={DriverRoutes} />;
    if (role === "shipper") return <Page routes={AdminRoutes} />;
  }
};

export default useRoutes;
