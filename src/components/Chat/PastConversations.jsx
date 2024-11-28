import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Material-UI delete icon
import { useChatContext } from "../../contexts/ChatContext";

const PastConversations = () => {
  const { savedConversations, deleteConversation } = useChatContext();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Past Conversations
      </Typography>
      <List>
        {savedConversations.length === 0 ? (
          <Typography>No past conversations available.</Typography>
        ) : (
          savedConversations.map((conv) => (
            <ListItem
              key={conv.id}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <ListItemText
                primary={`Conversation on ${new Date(
                  conv.id
                ).toLocaleString()}`}
                secondary={
                  <span>
                    {conv.messages.map((msg, index) => (
                      <React.Fragment key={index}>
                        <Typography
                          component="span"
                          variant="body1"
                          style={{ fontWeight: "bold", color: "blue" }} // Change color for sender
                        >
                          {msg.sender}:
                        </Typography>
                        <Typography
                          component="span"
                          variant="body1"
                          style={{ color: "green" }} // Change color for text
                        >
                          {msg.text}
                        </Typography>
                        {index < conv.messages.length - 1 && " | "}
                      </React.Fragment>
                    ))}
                  </span>
                }
              />
              <IconButton
                onClick={() => deleteConversation(conv.id)} // Trigger deleteConversation on button click
                color="error"
                sx={{ ml: 1 }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};

export default PastConversations;
