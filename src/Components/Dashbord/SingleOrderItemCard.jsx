/* eslint-disable react/prop-types */
import moment from "moment";
function SingleOrderItemCard({ orderTypeIcon, rating, orderTime,handleRatingClick }) {
  return (
    <div className="py-2 px-5 mb-5 rounded-lg hover:bg-base-200 cursor-pointer flex flex-row items-center">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="px-4 py-2 rounded-md bg-[#DCFCE7] flex items-center justify-center">
            {orderTypeIcon}
          </div>
          <div className="flex font-light ml-5 flex-col">
            <span className="text-sm font-mono">Card x100</span>
            <span className="text-xs">
              {moment(orderTime).format("Do MMMM YYYY, h:mmA")}
            </span>
          </div>
        </div>
        <div className="rating rating-lg rating-half">
          {[...Array(5)].map((_, i) => {
            const starValue = i + 0.5; // Half-star value (e.g., 0.5, 1.5, 2.5)
            return (
              <input
                key={`star-${i}`}
                type="radio"
                name="rating"
                className={`mask mask-star-2 ${
                  starValue <= rating ? "bg-[#FFD700]" : "bg-gray-300"
                }`}
                onClick={() => handleRatingClick(starValue)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleOrderItemCard;
