import HowItWorkCard from "./howItWorkCard";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

const HowItWorks = () => {
  return (
 <div>
    <div>
        <h1 className="text-center text-2xl md:text-3xl font-bold">Why Choose us</h1>
    </div>
       <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
      <HowItWorkCard
        title={"Find Your Favorite Stores"}
        description={
          "Browse through our curated list of top stores and brands to find"
        }
        btn={'Start Searching'}
        icon={<FaSearch />}
      />
      <HowItWorkCard
        title={"Explore the Best Discounts"}
        description={
          "Unlock incredible deals tailored to your shopping preferences, updated daily."
        }
        btn={'Discover Deals'}
        icon={<AiOutlinePercentage />}
      />
      <HowItWorkCard
        title={"Save More Every Day"}
        description={
          "Use our coupons and promo codes during checkout to save big on every purchase."
        }
        btn={'Learn How'}
        icon={<FaWallet />}
      />
      <HowItWorkCard
        title={"Simple and Hassle-Free"}
        description={
          " Just copy the coupon code and apply it instantly at your favorite stores. No hidden steps!"
        }
        btn={'Find Out More'}
        icon={<FaClipboardCheck />}
      />
      
    </div>
 </div>
  );
};

export default HowItWorks;
