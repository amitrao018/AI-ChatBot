import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          Chat & Feedback Application
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ mr: 1 }}>
            Dark Mode
          </Typography>
          <Switch
            checked={darkMode}
            onChange={toggleTheme} // Toggle dark mode
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

