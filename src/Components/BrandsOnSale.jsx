import { useEffect, useState } from "react";

import SaleCard from "./SaleCard";

const BrandsOnSale = () => {
  const [brandSale, setBrandSale] = useState([]);
  useEffect(() => {
    fetch("/discount.json")
      .then((res) => res.json())
      .then((data) =>
        setBrandSale(data.filter((brand) => brand.isSaleOn == true))
      );
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Brands On Sale</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {brandSale?.map((brand) => (
          <SaleCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSale;
