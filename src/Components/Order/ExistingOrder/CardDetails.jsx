/* eslint-disable react/prop-types */

const CardDetails= ({
  orientation,
  quantity,
  paperType,
  shippingAddress,
}) => {
  return (
    <div className="w-full mt-5 bg-base-100 rounded-lg shadow-lg px-5 py-2">
      <h1 className="font-bold">Card Details</h1>
      <div className="w-full flex flex-row justify-between mt-2">
        <div className="flex flex-col">
          <div className="text-xs">Card Orientation</div>
          <div className="font-light">{orientation}</div>
        </div>
        <div className="flex flex-col text-right">
          <div className="text-xs">Quantity</div>
          <div className="font-light">{quantity}</div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between mt-2">
        <div className="flex flex-col">
          <div className="text-xs">Paper Type</div>
          <div className="font-light">{paperType}</div>
        </div>
        <div className="flex flex-col text-right">
          <div className="text-xs">Shipping Address</div>
          <div className="font-light">{shippingAddress}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
