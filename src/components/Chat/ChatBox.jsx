import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useChatContext } from "../../contexts/ChatContext";
import MessageBubble from "./MessageBubble";

const ChatBox = ({ initialMessages = null }) => {
  const { messages, sendMessage, saveConversation, loading } = useChatContext();
  const [input, setInput] = useState("");
  const chatMessages = initialMessages || messages;

  const handleSend = () => {
    if (input.trim() === "") return;
    sendMessage(input);
    setInput("");
  };

  const handleSave = () => {
    if (messages.length === 0) return; // Prevent saving an empty conversation
    saveConversation(); // Save the current conversation using the context function
  };

  return (
    <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
        {chatMessages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress size={20} />
          </Box>
        )}
      </Box>
      {!initialMessages && (
        <Box sx={{ display: "flex" }}>
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <Button
            onClick={handleSend}
            variant="contained"
            color="primary"
            sx={{ ml: 1 }}
          >
            Send
          </Button>
          <Button
            onClick={handleSave}
            variant="outlined"
            color="secondary"
            sx={{ ml: 1 }}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
