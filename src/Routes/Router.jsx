import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands",
        element: <Brands />,
        loader: () => fetch("/discount.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/discount.json"),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/updateProfile',
        element:<PrivateRoute><UpdateProfile/></PrivateRoute>
      }
    ],
  },
]);

export default router;
