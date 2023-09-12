import { Route, Routes } from "react-router-dom";
import { AdminHeader } from "../../adminComponents/adminHeader/AdminHeader";
import SkeletonPage from "../../adminComponents/skeleton/SkeletonPage";
import { Footer } from "../../components/footer/Footer";
import { AddCar } from "../../adminComponents/addCar/AddCar";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <SkeletonPage />
      <AddCar/>
      <Footer />
      <AddCar />
      
      {/* <Routes> */}

        {/* <Route path="/addCar" element={} /> */}
      {/* </Routes> */}
    </div>
  );
};

export default Admin;
