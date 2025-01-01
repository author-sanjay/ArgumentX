import { ShoppingCart } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import SingleOrderItemCard from "./SingleOrderItemCard";

function LatestOrder() {
  const [rating, setRating] = useState(4);


  return (
    <div className="flex w-full flex-col">
      <div className="py-2 font-bold">Recent Orders</div>
      <div className="divider mb-5 mt-0"></div>
      <SingleOrderItemCard
        orderTypeIcon={<ShoppingCart width={15} height={15} color="#16A34A" />}
        rating={rating}
        handleRatingClick={setRating}
        orderTime={moment().format()}
      />
       <SingleOrderItemCard
        orderTypeIcon={<ShoppingCart width={15} height={15} color="#16A34A" />}
        rating={rating}
        handleRatingClick={setRating}
        orderTime={moment().format()}
      />
    </div>
  );
}

export default LatestOrder;
