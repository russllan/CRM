import { AdminHeader } from "../../adminComponents/adminHeader/AdminHeader";
import SkeletonPage from "../../adminComponents/skeleton/SkeletonPage";
import { Footer } from "../../components/footer/Footer";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <SkeletonPage />
      <Footer />
    </div>
  );
};

export default Admin;
