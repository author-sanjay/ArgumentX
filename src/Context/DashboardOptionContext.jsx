/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create Context
const DashBoardContext = createContext();

// Custom hook to use the context
export const useDashBoard = () => {
  return useContext(DashBoardContext);
};

// Provider component
export const DashBoardProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [miniCardClicked, setMiniCardClicked] = useState(false);
  const changeSelectedOption = (newOption) => {
    setSelectedOption(newOption);
  };

  return (
    <DashBoardContext.Provider
      value={{
        selectedOption,
        changeSelectedOption,
        miniCardClicked,
        setMiniCardClicked,
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
