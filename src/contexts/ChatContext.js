import React, { createContext, useContext, useState } from "react";
import aiResponses from "../data/aiResponses.json"; // Import AI responses from the data folder

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedConversations, setSavedConversations] = useState([]);

  const sendMessage = (text) => {
    if (text.trim() === "") return;

    const newMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    setTimeout(() => {
      let aiResponse = "Sorry, I didn't understand that.";

      // Search for the corresponding AI response
      for (const item of aiResponses) {
        if (text.toLowerCase().trim() === item.input.toLowerCase().trim()) {
          aiResponse = item.response;
          break;
        }
      }

      setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
      setLoading(false);
    }, 1000);
  };

  const startNewChat = () => {
    setMessages([]);
  };

  const saveConversation = () => {
    setSavedConversations((prev) => [...prev, { id: Date.now(), messages }]);
    setMessages([]); // Optionally clear messages after saving
  };

  const deleteConversation = (id) => {
    setSavedConversations((prev) =>
      prev.filter((conversation) => conversation.id !== id)
    );
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        sendMessage,
        startNewChat,
        saveConversation,
        savedConversations,
        deleteConversation, // Provide deleteConversation function
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
