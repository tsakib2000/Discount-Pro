
import Slider from '../Components/Slider';
import TopBrands from '../Components/TopBrands';
import BrandsOnSale from '../Components/BrandsOnSale';
import NewsLetter from '../Components/NewsLetter';
import HowItWorks from '../Components/HowItWorks';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4 gap-3'>
                     <Helmet>
    <title>Discount || Home</title>
  </Helmet>
        <div className='my-2'> <Slider/></div>
        <div className='my-2'> <TopBrands/></div>
        <div className='my-2 '><BrandsOnSale/> </div>
        <div className='my-2'><HowItWorks/> </div>
        <div className='my-2 w-full'><NewsLetter/> </div>

        </div>
    );
};

export default Home;