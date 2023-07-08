import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
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
  
        </Routes>
        <h1>{t("App.title")}</h1>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      </BrowserRouter>
      jjj
    </>
  );
}

export default App;
