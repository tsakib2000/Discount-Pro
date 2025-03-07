import  { useEffect, useState } from "react";
import BrandData from "./BrandData";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const TopBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/discount.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Top Picks for Smart Shopping</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {brands.slice(0, 4)?.map((brand) => (
          <BrandData key={brand._id} brand={brand} />
        ))}
      </div>
      <Marquee direction="right" pauseOnHover >
        <div className="border flex gap-5 justify-center items-center md:h-44 my-4 overflow-hidden shadow-lg">
            {
                brands?.map(brand=> <Link to={`/brand/${brand._id}`} key={brand._id}><img className="h-24" src={brand.brand_logo}></img></Link>)
            }
        </div>
      </Marquee>
    </div>
  );
};

export default TopBrands;
