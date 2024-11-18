const Coupon = ({ coupon }) => {
  console.log(coupon);

  // condition
  // :
  // "Applicable on all categories"
  // coupon_code
  // :
  // "DARAZBD100"
  // coupon_type
  // :
  // "Discount"
  // description
  // :
  // "BDT 100 off on orders above BDT 1,000"
  // expiry_date
  // :
  // "2024-12-15
  const {condition,coupon_code,coupon_type,description,expiry_date}=coupon
  return   <div className="card  bg-base-100 shadow-xl border border-gray-200">
  <div className="card-body">
    <h2 className="card-title text-blue-500">
      Save BDT {description}!
    </h2>

    <p className="text-sm text-gray-500 mt-2">
      <strong>Condition:</strong> {condition}
    </p>
    <p className="text-sm text-gray-500 mt-1">
      <strong>Expires:</strong> {expiry_date}
    </p>
    <p className="text-sm text-gray-500 mt-1">
      <strong>Coupon Code:</strong> {coupon_code}
    </p>
    <div className="card-actions justify-between mt-4 ">
   <div className="flex gap-4">
   <button className="btn bg-blue-400 text-white font-semibold">Copy Code</button>
   <button className="btn bg-blue-400 text-white font-semibold">Use Now</button>
   </div>
    </div>
  </div>
</div>;
};

export default Coupon;
