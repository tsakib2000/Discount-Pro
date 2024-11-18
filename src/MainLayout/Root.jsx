import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import toast, { Toaster } from 'react-hot-toast';

import WelcomeText from './../Components/WelcomeText';
const Root = () => {
  const {pathname} = useLocation()

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
        <Toaster />
      </div>
    );
};

export default Root;