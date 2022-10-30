import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Shop from "../../pages/shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to="/shop" />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);
