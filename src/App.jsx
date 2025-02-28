import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";
import { ShopingCard } from "./pages/ShopingCard/ShopingCard";
import { Login } from "./pages/Authentication/Login";
import { Register } from "./pages/Authentication/Register";
import { ProductDetails } from "./components/scrollToTop/ProductDetails";
import { Shop } from "./pages/shop/shop";

export const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="shop-card" element={<ShopingCard />} />
          <Route path="product/details/:id" element={<ProductDetails />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};
