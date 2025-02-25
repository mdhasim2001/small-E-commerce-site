import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";
import { ShopingCard } from "./pages/ShopingCard/ShopingCard";
import { Login } from "./pages/Authentication/Login";
import { Register } from "./pages/Authentication/Register";

export const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop-card" element={<ShopingCard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Register />} />
      </Routes>
    </div>
  );
};
