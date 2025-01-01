/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Custom hook to use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "luxury" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div> 
    </ThemeContext.Provider>
  );
};
