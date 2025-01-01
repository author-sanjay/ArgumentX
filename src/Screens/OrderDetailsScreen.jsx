import DashBoardNav from "../Components/Dashbord/DashBoardNav";
import OrderDetails from "../Components/Order/ExistingOrder/OrderDetails";
import ThemeToggle from "../Components/Theme/ThemeToggle";
import { useTheme } from "../Context/ThemeContext";

function OrderDetailsScreen() {
  const { theme } = useTheme();
  const admin = true;
  return (
    <div
      data-theme={theme}
      className="w-screen bg-base-200 h-screen overflow-hidden  select-none"
    >
      <DashBoardNav admin={admin} />
      <OrderDetails admin={admin} />
      <ThemeToggle />
    </div>
  );
}

export default OrderDetailsScreen;
