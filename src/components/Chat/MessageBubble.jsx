import React from "react";
import { Box, Typography } from "@mui/material";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          bgcolor: isUser ? "blue.100" : "grey.300",
          p: 2,
          borderRadius: 2,
          borderTopLeftRadius: isUser ? 8 : 2,
          borderTopRightRadius: isUser ? 2 : 8,
          maxWidth: "70%",
        }}
      >
        <Typography>{message.text}</Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;

