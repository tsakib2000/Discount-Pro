import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';


import WelcomeText from './../Components/WelcomeText';
const Root = () => {
  const {pathname} = useLocation()
  console.log(location);
    return (
      <div className='md:w-11/12 mx-auto  '>
         <div>
{
 pathname== '/' &&  <WelcomeText/>
}
 </div>
        <Navbar/>
       <div className='min-h-[calc(100vh-292px)]'>
       <Outlet/>
       </div>
        <Footer/>
      </div>
    );
};

export default Root;