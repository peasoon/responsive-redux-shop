import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Shop from "../../pages/shop/Shop";
import Cart from "../../pages/cart/Cart";
import ItemPage, { itemDataLoader } from "../../pages/itemPage/ItemPage";

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
      {
        path: "/shop/:id",
        element: <ItemPage />,
				loader: itemDataLoader
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
