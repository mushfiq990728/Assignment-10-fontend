import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddService from "../pages/AddService";
import ListingDetails from "../pages/ListingDetails";
import MyListings from "../pages/MyListings";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },

      { path: "/listing/:id", element: <ListingDetails /> },

      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
    ],
  },
]);

export default router;
