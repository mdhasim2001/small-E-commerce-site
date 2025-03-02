import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="mb-10">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
