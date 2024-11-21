
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import  { Toaster } from 'react-hot-toast';

import WelcomeText from './../Components/WelcomeText';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Root = () => {

const {user}=useContext(AuthContext)
    return (
      <div className='md:w-11/12 mx-auto  '>
         <div>
{
 user && <WelcomeText/>
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