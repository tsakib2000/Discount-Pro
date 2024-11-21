import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const WelcomeText = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center text-center flex-col gap-4 mt-3">
      <h1 className="text-3xl md:text-5xl font-bold">
        Welcome to Discount Pro! 🎉
      </h1>
      <p className="text-sm text-gray-400 font-semibold">
        Your ultimate destination for the best deals and exclusive coupons from
        Bangladesh&apos;s top e-commerce platforms. 🛒
      </p>
         <div className="p-4 flex items-center  h-4 w-max bg-blue-400 text-white font-semibold">
          <p>{ user.displayName}</p>
          </div>
        
       
   
    </div>
  );
};

export default WelcomeText;
