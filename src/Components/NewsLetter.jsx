import banner from "../assets/Snow.svg";
import { CiMail } from "react-icons/ci";
const NewsLetter = () => {
  return (<>
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">Stay Updated with the Best Deals!</h1>
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="text-white p-10"
    >
      <div>
      </div>
      <div className="text-center flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl text-blue-400">
        <CiMail />
        </h1>
        <h3 className="text-base font-semibold">
          Subscribe to have new coupon lists delivered directly to your inbox
        </h3>
        <div className="flex">
        <label className="input input-bordered flex items-center gap-2 rounded-r-none">
  <input type="email" className="grow" placeholder="Enter your email" />

</label>
<button className="btn rounded-l-none bg-blue-400 border-none text-white">Subscribe</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsLetter;
