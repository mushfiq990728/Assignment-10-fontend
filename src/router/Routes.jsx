import { createBrowserRouter } from "react-router-dom"; // Fixed import
import Root from "../root/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddService from "../pages/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/add-service',
        element: <AddService></AddService>
      },
      {
        path: '/signup',
        element: <Register />
      }
    ]
  },
]);

export default router;