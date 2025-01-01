import { useEffect, useState } from "react";
import { useOrders } from "../../../Context/OrderContext";
import OrderSummary from "./OrderSummary";
import OrderStatusSteps from "./OrderStatusStep";
import ARModelViewer from "./ARModelViewer";
import CustomerInformation from "./CustomerInformation";
import QuickActions from "./QuickAction";
import CardDetails from "./CardDetails";

function OrderDetails({admin}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { selectedOrder } = useOrders();

  useEffect(() => {
    console.log(selectedOrder);
  }, [selectedOrder]);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-row py-10 gap-10 px-32">
    <div className="w-[60%] h-[90%]">
      <OrderSummary selectedOrder={selectedOrder} />
      <OrderStatusSteps selectedOrder={selectedOrder} />
      <ARModelViewer
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <CardDetails orientation={"LandScape"} paperType={"Matte"} quantity={selectedOrder.quantity} shippingAddress={"Test Address"}/>
    </div>
    <div className="w-[40%] h-[90%]">
      <CustomerInformation />
      <QuickActions selectedOrder={selectedOrder} admin={admin} />
    </div>
  </div>
  );
}

export default OrderDetails;
