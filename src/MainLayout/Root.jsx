import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
      <div>
        <Navbar/>
       <div className='min-h-[calc(100vh-292px)]'>
       <Outlet/>
       </div>
        <Footer/>
      </div>
    );
};

export default Root;