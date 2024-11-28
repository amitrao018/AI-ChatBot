import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      width: "100%",
      bgcolor: "red", // Material UI color or any custom color
      color: "white",
      padding: "10px 0",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 1000, // Ensure footer stays above content if necessary
    }}
  >
    <Typography variant="body2">&copy; 2024 AI Chat Assistant</Typography>
  </Box>
);

export default Footer;
