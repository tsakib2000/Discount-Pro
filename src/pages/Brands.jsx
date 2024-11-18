import { useLoaderData } from "react-router-dom";
import BrandCard from "../Components/BrandCard";


const Brands = () => {
    const data = useLoaderData();
    console.log(data);
    return ( <>
        <div className=" bg-banner p-9  space-y-4">
                <div className="text-center space-y-4">
                <h1 className="text-4xl text-white font-bold">Brands</h1>
                <p className="text-white font-semibold">Discover exclusive deals from your favorite brands here.</p>
                </div>
        <div className="flex justify-center items-center">
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </div>

        </div>
        
        <div>
            {
                data.map(brand=> <BrandCard brandCard={brand}/>)
            }
        </div>
        </>
    );
};

export default Brands;