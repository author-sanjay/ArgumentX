import {
  BadgeAlert,
  Box,
  DollarSign,
  QrCode,
  ShoppingCart,
} from "lucide-react";
import DashBoardHeader from "../Components/Dashbord/DashBoardHeader";
import DashBoardNav from "../Components/Dashbord/DashBoardNav";
import DashBoardStatsIndicatorCards from "../Components/Dashbord/DashBoardStatsIndicatorCards";
import UserOptions from "../Components/Dashbord/LeftUserSection/UserOptions";
import { useTheme } from "../Context/ThemeContext";
import { useDashBoard } from "../Context/DashboardOptionContext";
import DataListSection from "../Components/Dashbord/DataListSection/DataListSection";
import ThemeToggle from "../Components/Theme/ThemeToggle";
import { useEffect } from "react";
import { useOrders } from "../Context/OrderContext";

const Dashboard = () => {
  const { theme } = useTheme();
  const { selectedOption, changeSelectedOption, setMiniCardClicked } =
    useDashBoard();
  const admin = true;
  const { setCreateDispute } = useOrders();
  useEffect(() => {
    setCreateDispute(false);
  }, []);
  const renderStatsCards = () => {
    const commonCards = [
      {
        icon: <ShoppingCart height={15} width={15} className="text-primary" />,
        number: 8,
        name: "Active Orders",
        onClick: () => handleCardClick("Orders"),
      },
    ];

    const userCards = [
      ...commonCards,
      {
        icon: <QrCode height={15} width={15} className="text-primary" />,
        number: 8,
        name: "QR Codes",
        onClick: () => handleCardClick("QR Codes"),
      },
      {
        icon: <Box height={15} width={15} className="text-primary" />,
        number: 8,
        name: "AR Models",
        onClick: () => handleCardClick("AR/VR Models"),
      },
    ];

    const adminCards = [
      ...commonCards,
      {
        icon: <BadgeAlert height={15} width={15} className="text-primary" />,
        number: 8,
        name: "Active Disputes",
        onClick: () => handleCardClick("Disputes"),
      },
      {
        icon: <DollarSign height={15} width={15} className="text-primary" />,
        number: "Rs 8",
        name: "Month Revenue",
        onClick: () => handleCardClick("Orders"),
      },
    ];

    return (admin ? adminCards : userCards).map((card, index) => (
      <DashBoardStatsIndicatorCards
        key={index}
        statsIcon={card.icon}
        statsNumber={card.number}
        statsname={card.name}
        onclick={card.onClick}
      />
    ));
  };

  const handleCardClick = (option) => {
    changeSelectedOption(option);
    setMiniCardClicked(true);
  };

  return (
    <div
      data-theme={theme}
      className="w-screen bg-base-200 h-screen overflow-scroll noScrollbar select-none"
    >
      <DashBoardNav admin={admin} />
      <div className="w-full h-full flex flex-row px-12 py-10">
        <UserOptions admin={admin} />
        <div className="ml-5 w-full">
          <DashBoardHeader admin={admin} />
          <div
            className={`${
              !admin ? "mt-5" : ""
            } w-full flex flex-row justify-between`}
          >
            {renderStatsCards()}
          </div>
          <DataListSection admin={admin} selectedOption={selectedOption} />
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Dashboard;
