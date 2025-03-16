import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";
import { ShopingCard } from "./pages/ShopingCard/ShopingCard";
import { Login } from "./pages/Authentication/Login";
import { Register } from "./pages/Authentication/Register";
import { Profile } from "./pages/profile/Profile";
import { PrivetRouter } from "./context/PrivetRouter";
import { ProductDetails } from "./components/ProductDetails";

export const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="product/details/:id" element={<ProductDetails />} />
          <Route path="shop-card" element={<ShopingCard />} />
          <Route
            path="profile"
            element={
              <PrivetRouter>
                <Profile />
              </PrivetRouter>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};
