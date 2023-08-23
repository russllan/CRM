import { FC, useEffect, useState } from "react";
import "./App.scss";
import useRoutes from "./hooks/useRoutes";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { refreshAuth } from "./store/slices/authSlice";

const App: FC = () => {
  const { error } = useSelector((state: RootState) => state.auth);
  const [errorState, setErrorState] = useState<boolean>(error);
  const dispatch: AppDispatch = useDispatch();
  const routes = useRoutes();

  if (errorState) {
    const refresh = localStorage.getItem("token");
    if (refresh !== null) {
      const parsedRefresh = JSON.parse(refresh);
      if (Object.keys(parsedRefresh).length === 0) {
        return <div>Авторизуйтесь!!!</div>;
      } else {
        dispatch(refreshAuth(parsedRefresh.refresh));
        console.log("refresh its work!");
      }
    }
  }

  return <div>{routes}</div>;
};

export default App;
