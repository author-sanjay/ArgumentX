import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useOrders } from "../../../Context/OrderContext";

/* eslint-disable react/prop-types */
function QuickActions({ selectedOrder, admin }) {
  const navigate = useNavigate();
  const { setCreateDispute } = useOrders();
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const statuses = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const handleRatingSubmit = () => {
    if (rating != null && review.trim() !== "") {
      alert(`Rating submitted: ${rating}\nReview: ${review}`);
      setIsRatingOpen(false); // Close the rating modal after submission
    } else {
      alert("Please select a rating and provide a review before submitting.");
    }
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    console.log(`Status updated to: ${status}`);
    setStatusDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="w-full mt-7 bg-base-100 px-5 py-4 rounded-lg shadow-lg">
      <h1 className="font-bold text-lg mb-4">Quick Actions</h1>
      {admin ? (
        <div className="flex flex-col gap-3">
          {/* Update Status Dropdown */}
          <div className="relative">
            <button
              className="btn btn-primary btn-sm w-full"
              onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
            >
              {selectedStatus === "" ? "Update Status" : selectedStatus}
            </button>
            {statusDropdownOpen && (
              <ul className="absolute z-10 bg-base-200 rounded-lg shadow-lg w-full mt-2">
                {statuses.map((status) => (
                  <li
                    key={status}
                    className="p-2 cursor-pointer hover:bg-base-300"
                    onClick={() => handleStatusSelect(status)}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="btn btn-primary btn-sm w-full" onClick={()=>{navigate("/dashboard/addARModel")}}>Upload AR</button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <button className="btn btn-primary btn-sm w-full">
            Download Invoice
          </button>
          {selectedOrder?.status === "Delivered" ? (
            selectedOrder.status !== "Disputed" ? (
              <button
                className="btn btn-warning btn-sm w-full"
                onClick={() => {
                  navigate("/dashboard/dispute");
                  setCreateDispute(true);
                }}
              >
                Raise Dispute
              </button>
            ) : (
              <button
                className="btn btn-warning btn-sm w-full"
                onClick={() => {
                  navigate("/dashboard/dispute");
                }}
              >
                View Dispute
              </button>
            )
          ) : (
            <></>
          )}
          {selectedOrder?.status !== "Cancelled" &&
            selectedOrder?.status !== "Delivered" && (
              <button className="btn btn-error btn-sm w-full">
                Cancel Order
              </button>
            )}
          {selectedOrder?.status === "Delivered" && (
            <>
              <button
                className="btn btn-success btn-sm w-full"
                onClick={() => setIsRatingOpen(true)}
              >
                Rate Product
              </button>
              {isRatingOpen && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-base-100 p-6 rounded-lg w-1/2 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">
                      Rate this Product
                    </h2>
                    <div className="rating mb-4">
                      {/* Radio button stars UI */}
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          onChange={() => setRating(star)}
                          checked={rating === star}
                        />
                      ))}
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="w-full p-2 border rounded-md"
                        rows="4"
                        placeholder="Write your review here..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => setIsRatingOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleRatingSubmit}
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default QuickActions;
