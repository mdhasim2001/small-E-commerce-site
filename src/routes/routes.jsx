import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Authentication/Login";
import { Register } from "../pages/Authentication/Register";
import { ShopingCard } from "../pages/ShopingCard.jsx/ShopingCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop-card",
        element: <ShopingCard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
