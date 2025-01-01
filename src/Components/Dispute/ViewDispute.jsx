import DisputeHeader from "./DisputeHeader";
import DisputeDetails from "./DisputeDetails";
import DisputeCommunication from "./DisputeCommunication";
import DisputeEvidances from "./DisputeEvidances";
import moment from "moment";
import DisputeSteps from "./DisputeSteps";
import { useOrders } from "../../Context/OrderContext";
import DisputeQuickAction from "./DisputeQuickAction";

const mockEvidence = [
  { type: "image", src: "https://via.placeholder.com/150" },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
  { type: "image", src: "https://via.placeholder.com/200" },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
  },
];

const mockMessages = [
  {
    sender: "Client",
    message: "Can you please check the issue again?",
    time: "10:30 AM",
  },
  { sender: "User", message: "Sure, I’ll look into it.", time: "10:25 AM" },
  {
    sender: "Client",
    message: "The AR model is not working as expected.",
    time: "10:20 AM",
  },
];

const mockDisputeChangeLog = [
  {
    timestamp: moment().subtract(2, "days"),
    status: "Initiated",
    user: "User",
  },
  {
    timestamp: moment().subtract(1, "days"),
    status: "Communicating",
    user: "Client",
  },
];

function ViewDispute() {
  const { selectedDispute } = useOrders();
  const statusOrder = ["Initiated", "Communicating", "Resolved"];
  const sortedChangeLog = [...mockDisputeChangeLog].sort(
    (a, b) =>
      statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status) ||
      a.timestamp - b.timestamp
  );
  const latestStatus = sortedChangeLog[sortedChangeLog.length - 1]?.status;

  return (
    selectedDispute && (
      <div className="w-full flex-col flex bg-base-300 py-10 px-10">
        <DisputeHeader />
        <div className="px-6 mt-5 justify-between flex flex-row">
          <div className="w-[60%] pb-5">
            <DisputeDetails />
            <DisputeEvidances mockEvidence={mockEvidence} />
            <DisputeCommunication mockMessages={mockMessages} />
          </div>

          <div className="w-[35%] px-5 py-3 rounded-lg ">
            <DisputeSteps
              latestStatus={latestStatus}
              sortedChangeLog={sortedChangeLog}
              statusOrder={statusOrder}
            />
            <DisputeQuickAction/>
          </div>
        </div>
      </div>
    )
  );
}

export default ViewDispute;
