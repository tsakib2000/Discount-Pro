/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brandCard }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  const { _id,brand_name, rating, description, brand_logo,isSaleOn } =
    brandCard;
  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col md:flex-row items-start justify-between  shadow-2xl rounded-2xl p-4"
    >
      <div className="space-y-5">
        <div className="w-max h-16 ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={brand_logo}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-base">Brand Name:{brand_name}</h3>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-blue-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-blue-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-blue-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-blue-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-blue-400"
            />
          </div>
          <p className="font-semibold">{rating}</p>
        </div>
      </div>

      <div className="flex justify-evenly  flex-col">
        <h2 className="text-3xl">{brand_name}</h2>
        <p className="text-base">{description}</p>
      </div>


      <div className="flex flex-col justify-start gap-10 items-center">
        <div >
            <Link to={`/brand/${_id}`}  className="btn">View Coupon</Link>
        </div>
    {
        isSaleOn && <div className="animate-bounce italic text-red-600"><h1 className="text-3xl font-bold">Sale Is On</h1></div>
    }
      </div>
    </div>
  );
};

export default BrandCard;
