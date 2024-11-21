/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HowItWorkCard = ({title,description,btn,icon}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos='fade-up'>
      <div className="card h-[312px] border">
        <div className="card-body">
            <h1 className="flex justify-center text-5xl">{icon}</h1>
          <h2 className=" text-center  text-xl font-semibold">
           
          {title}
          </h2>
          <p className="font-semibold text-gray-400">
            {description}
          </p>
          <div className="card-actions w-full">
            <button className="btn w-full bg-blue-400 text-white">{btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkCard;
