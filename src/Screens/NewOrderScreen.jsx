import DashBoardNav from "../Components/Dashbord/DashBoardNav";
import Neworder from "../Components/Order/NewOrder/Neworder";
import ThemeToggle from "../Components/Theme/ThemeToggle";
import { useTheme } from "../Context/ThemeContext";

function NewOrderScreen() {
  const { theme } = useTheme();
  const admin = false;
  return (
    <div data-theme={theme}
      className="w-screen bg-base-200 h-screen  overflow-hidden noScrollbar select-none">
      <DashBoardNav admin={admin} />
      <Neworder />
      <ThemeToggle />
    </div>
  )
}

export default NewOrderScreen