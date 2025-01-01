import DashBoardNav from "../Components/Dashbord/DashBoardNav";
import PostDispute from "../Components/Dispute/PostDispute";
import ViewDispute from "../Components/Dispute/ViewDispute";
import ThemeToggle from "../Components/Theme/ThemeToggle";
import { useOrders } from "../Context/OrderContext";
import { useTheme } from "../Context/ThemeContext";

function DisputeScreen() {
  const { theme } = useTheme();
  const { createDispute } = useOrders();
  const admin = false;
  return (
    <div
      data-theme={theme}
      className="w-screen bg-base-200 h-screen overflow-y-scroll noScrollbar select-none"
    >
      <DashBoardNav admin={admin} />
      {createDispute ? <PostDispute /> : <ViewDispute />}
      <ThemeToggle />
    </div>
  );
}

export default DisputeScreen;
