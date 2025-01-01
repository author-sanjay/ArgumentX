import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function DashBoardHeader({ admin }) {
  const navigate = useNavigate();
  return (
    !admin && (
      <div className="w-full bg-base-100 rounded-lg shadow-lg py-4 px-5">
        <div className="flex w-full justify-between items-center">
          <div className=" flex flex-col">
            <span className="font-bold">Welcome Back, John!</span>
            <span className="text-xs">
              Your AR brand experience is waiting for you.
            </span>
          </div>
          <div className="mr-2">
            <div
              className="text-sm hover:scale-105 flex items-center justify-center bg-primary text-primary-content rounded-full cursor-pointer font-light px-5 py-2 active:scale-95 transition-transform duration-150"
              onClick={() => {
                navigate("/dashboard/newOrder");
              }}
            >
              New Order
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DashBoardHeader;
