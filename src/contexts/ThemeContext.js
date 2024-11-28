import React, { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom Hook to use Theme Context
export const useThemeContext = () => useContext(ThemeContext);

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    console.log("Theme toggled: ", !darkMode); // Debugging
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
