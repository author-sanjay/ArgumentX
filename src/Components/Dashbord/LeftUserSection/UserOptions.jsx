/* eslint-disable react/prop-types */
import {
  BadgeAlert,
  Box,
  Home,
  QrCode,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import SingleUserOption from "./SingleUserOption";
import { useDashBoard } from "../../../Context/DashboardOptionContext";

const userOptions = [
  { name: "Dashboard", icon: <Home height={15} width={15} /> },
  { name: "Users", icon: <User height={15} width={15} />, adminOnly: true },
  { name: "Orders", icon: <ShoppingCart height={15} width={15} /> },
  { name: "QR Codes", icon: <QrCode height={15} width={15} /> },
  { name: "AR/VR Models", icon: <Box height={15} width={15} /> },
  { name: "Disputes", icon: <BadgeAlert height={15} width={15} /> },
  { name: "Settings", icon: <Settings height={15} width={15} /> },
];

function UserOptions({ admin }) {
  const { selectedOption, changeSelectedOption, setMiniCardClicked } =
    useDashBoard();

  const handleOptionClick = (optionName) => {
    changeSelectedOption(optionName);
    setMiniCardClicked(false);
  };

  return (
    <div className="bg-base-100 h-fit px-10 py-5 rounded-xl w-1/3 shadow-lg">
      <div className="flex flex-row w-full justify-between text-left items-center">
        <div className="avatar">
          <div className="mask mask-hexagon w-10">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-l font-light">John Doe</div>
          <div className="text-xs font-extralight">Company Name</div>
        </div>
      </div>
      <div className="flex flex-col mt-5 w-full gap-2 items-center justify-center">
        {userOptions.map(
          ({ name, icon, adminOnly }) =>
            (!adminOnly || admin) && (
              <SingleUserOption
                key={name}
                OptionName={name}
                icon={icon}
                selected={selectedOption === name}
                onClick={() => handleOptionClick(name)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default UserOptions;
