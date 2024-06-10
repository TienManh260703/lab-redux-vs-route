import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import Cart from "../pages/Cart/Cart";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";

export const routes = [
  {
    path: "",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
