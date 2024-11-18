import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import BrandDetails from "../pages/BrandDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
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
          element:<MyProfile/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/brand/:id',
          element:<BrandDetails/>,
          loader:()=>fetch('/discount.json')
        }

      ]
    },
  ]);

  export default router