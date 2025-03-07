/* eslint-disable react/prop-types */
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const Coupon = ({ coupon,shop_link }) => {
  const {
    condition,
    coupon_code,
    coupon_type,
    description,
    expiry_date,
    
  } = coupon;


  return (
    <div className="card  bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body">
        <h2 className="card-title text-blue-500">Save BDT {description}!</h2>

        <p className="text-sm text-gray-500 mt-2">
          <strong>Condition:</strong> {condition}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Expires:</strong> {expiry_date}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Type:</strong> {coupon_type}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <strong>Coupon Code:</strong>
       {coupon_code}
        </p>
        <div className="card-actions justify-between mt-4 ">
          <div className="flex md:flex-col lg:flex-row gap-4">
            <CopyToClipboard text={coupon_code}>
              <button
                onClick={() => toast.success("Coupon Code Copied")}
                className="btn bg-blue-400 text-white font-semibold"
              >
                Copy Code
              </button>
            </CopyToClipboard>
      
            <button className="btn bg-blue-400 text-white font-semibold" onClick={() => window.open(shop_link, "_blank", "noopener,noreferrer")}>Use Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
