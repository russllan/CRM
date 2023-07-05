import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </I18nextProvider>
  
);
