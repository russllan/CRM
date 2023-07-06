import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Driver from "./pages/Driver";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/driver" element={<Driver />} />
        </Routes>
        <h1>{t("App.title")}</h1>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        kk
      </BrowserRouter>
    </>
  );
}

export default App;
