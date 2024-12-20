import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="mb-10 px-5">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
