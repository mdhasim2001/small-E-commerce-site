import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="">
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
