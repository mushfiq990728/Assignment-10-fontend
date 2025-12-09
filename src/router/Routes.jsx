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
      // Home
      {
        path: "/",
        element: <Home />,
      },

      // Public services list (Pets & Supplies)
      {
        path: "/services",
        element: <Services />,
      },

      // Service / Listing details (PROTECTED)
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        ),
      },

      // Add Listing (PROTECTED)
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },

      // My Listings (PROTECTED)
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },

      // My Orders (PROTECTED)
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },

      // Auth
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },

      // 404
      {
        path: "*",
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);

export default router;
