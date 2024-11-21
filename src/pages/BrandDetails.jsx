
import { useLoaderData, useParams } from "react-router-dom";
import Coupon from "../Components/Coupon";
import bg from "../assets/Snow.svg";
import { useEffect, useState } from "react";
const BrandDetails = () => {
  const data = useLoaderData();
  const [brandDetails, setBrandDetails] = useState(data);

  

  const { id } = useParams();
  useEffect(() => {
    
      
      const singleBrandDetails = data?.find((brand) => brand._id == id);
      setBrandDetails(singleBrandDetails);
 
    
  }, [data, id]);
  const { brand_name , rating, brand_logo, coupons,shop_link } = brandDetails;

  
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" p-9  space-y-4 flex flex-col justify-center items-center"
      >
        <img className="h-[91px]" src={brand_logo} alt="" />
        <h1 className="text-white font-bold text-xl">{brand_name}</h1>
        <div className="flex items-center gap-3">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-blue-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-blue-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-blue-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-blue-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-blue-400"
            />
          </div>
          <p className="text-white font-semibold">{rating}</p>
        </div>
      </div>
      <div className="text-center my-6">
        <h1 className="tex-2xl md:text-4xl font-bold" >Latest Deals and Promo Codes</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 my-4">
        {coupons?.map((coupon, idx) => (
          <Coupon key={idx} coupon={coupon} shop_link={shop_link} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
