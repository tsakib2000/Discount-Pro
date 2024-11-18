import React from 'react';
import Slider from '../Components/Slider';
import TopBrands from '../Components/TopBrands';


const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4 gap-3'>
        <div className='my-2'> <Slider/></div>
        <div className='my-2'> <TopBrands/></div>

        </div>
    );
};

export default Home;