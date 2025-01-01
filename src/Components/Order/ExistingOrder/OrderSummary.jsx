/* eslint-disable react/prop-types */
import moment from "moment";

function OrderSummary({ selectedOrder }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Ordered":
        return "bg-blue-100 text-blue-700";
      case "AR Prepared":
        return "bg-yellow-100 text-yellow-700";
      case "Printing":
        return "bg-orange-100 text-orange-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-300 text-gray-100";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-base-100 rounded-lg shadow-lg py-2 px-5">
      <div className="w-full justify-between flex flex-row items-center">
        <span className="text-xl font-bold">Order #{selectedOrder?.id}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusClass(
            selectedOrder.status
          )}`}
        >
          {selectedOrder.status}
        </span>
      </div>
      <div className="mt-5">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs font-light">Order Date</span>
            <span className="text-sm">
              {moment().format("Do MMMM YYYY, h:mmA")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-light">Payment Method</span>
            <span className="text-sm">UPI</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-light">Total Amount</span>
            <span className="text-sm">Rs {selectedOrder.price}/-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
