/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SaleCard = ({ brand }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { brand_name,  brand_logo, category,coupons } =
    brand;
  return (
    <div data-aos="fade-up" className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10 w-full h-28">
        <img
          src={brand_logo}
          alt="Shoes"
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-start ">
        <h2 className="card-title">{brand_name}</h2>
        <p className="font-semibold">Available Coupons: {coupons.length}</p>
        <div className="card-actions">
          <div className="bg-blue-400 p-3 rounded-2xl font-semibold">
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
