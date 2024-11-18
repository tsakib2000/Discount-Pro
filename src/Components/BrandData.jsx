import Aos from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from 'react';
const BrandData = ({brand}) => {

useEffect(()=>{
    Aos.init();
},[])
    const{brand_name,rating,description,brand_logo,shop_link,category}=brand
    return (
        <div data-aos='fade-up' className="card bg-base-100 h-[342px]  shadow-xl p-1">
        <figure>
          <img
            src={brand_logo}
            alt={brand_name} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {brand_name}
            <div className="text-sm bg-indigo-400 py-2 px-1 rounded-3xl text-white">{category}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline font-bold ">Rating :{rating}</div>
          
          </div>
        </div>
      </div>
    );
};

export default BrandData;