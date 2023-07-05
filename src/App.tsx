import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Driver from "./pages/Driver";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/driver" element={<Driver />} />
          
        </Routes>
      kk
      </BrowserRouter>
    </>
  );
}

export default App;
