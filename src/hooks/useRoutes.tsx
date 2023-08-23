import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Page from "../components/pages/DriverPage";
import { AdminRoutes, DriverRoutes, UserRoutes } from "../constants/routes";

const useRoutes = (): ReactNode => {
  const { role } = useSelector((state: RootState) => state.auth);
  const roleData = role; // 'driver' | 'shipper'

  // if(!isAuth) return <Page routes={notAuthRoutes} />;
  if (roleData) {
    if (roleData === "driver") return <Page routes={DriverRoutes} />;
    if (roleData === "shipper") return <Page routes={AdminRoutes} />;
    else {
      return <Page routes={UserRoutes} />;
    }
  }
};

export default useRoutes;
