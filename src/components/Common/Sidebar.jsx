// src/components/Common/Sidebar.jsx
import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useChatContext } from "../../contexts/ChatContext";

const Sidebar = ({ onNavigate }) => {
  const { startNewChat } = useChatContext();

  const menuItems = [
    {
      label: "New Chat",
      action: () => {
        startNewChat();
        onNavigate("chat");
      },
    },
    {
      label: "Past Conversation",
      action: () => onNavigate("pastConversations"),
    },
    { label: "Feedback", action: () => onNavigate("feedback") }, // New Feedback button
  ];

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "grey.100",
        height: "100vh",
        boxShadow: 1,
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Menu
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} button onClick={item.action}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
