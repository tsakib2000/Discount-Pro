import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const WelcomeText = () => {
const {name}=useContext(AuthContext)
  return (
    <div className="flex justify-center items-center text-center flex-col mt-3">
      <h1 className="text-3xl md:text-5xl font-bold">Welcome to Discount Pro! 🎉</h1>
      <p className="text-sm text-gray-400 font-semibold">
        Your ultimate destination for the best deals and exclusive coupons from
        Bangladesh's top e-commerce platforms. 🛒
      </p>
      <p>{name}</p>
    </div>
  );
};

export default WelcomeText;
