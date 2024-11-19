import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/register";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/brands',
          element:<Brands/>,
          loader:()=> fetch('/discount.json')
        },
        {
          path:'/profile',
          element:<PrivateRoute><MyProfile/></PrivateRoute>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/brand/:id',
          element:<PrivateRoute><BrandDetails/></PrivateRoute>,
          loader:()=>fetch('/discount.json')
        },
    
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    }

  ]);

  export default router