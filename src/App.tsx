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
    <div className="App">
      <BrowserRouter>
      <h1>{t("App.title")}</h1>
        <button className="btn" onClick={() => changeLanguage("en")}>EN</button>
        <button className="btn" onClick={() => changeLanguage("ru")}>RU</button>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/driver" element={<Driver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
