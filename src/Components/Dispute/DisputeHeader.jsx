import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
function DisputeHeader() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row h-min items-center w-full px-5"
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      <div className="bg-base-100 py-2 px-2 rounded-tl-2xl cursor-pointer hover:bg-base-200 rounded-bl-2xl shadow-lg mr-3">
        <ChevronLeft />
      </div>
      <div className="bg-base-100 py-2 px-5 items-center justify-between flex font-bold rounded-tr-2xl rounded-br-2xl  shadow-lg mr-3 w-full">
        <span>Dispute Details</span>
        <div className="flex items-center justify-center gap-5">
          <div className="font-light text-xs py-1 rounded-lg bg-[#f78133] px-3 text-white">
            Under Review
          </div>
          <div className="font-bold text-xs">Order Id #1</div>
        </div>
      </div>
    </div>
  );
}

export default DisputeHeader;
