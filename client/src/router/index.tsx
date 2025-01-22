import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import OrderPage from "../pages/orders";

export enum Pages {
  ORDERS = "/orders",
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: Pages["ORDERS"],
        element: <OrderPage />,
      },
    ],
  },
]);
