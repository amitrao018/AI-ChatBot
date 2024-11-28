import React, { useState } from "react";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Sidebar from "./components/Common/Sidebar";
import ChatBox from "./components/Chat/ChatBox";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import FeedbackTable from "./components/Feedback/FeedbackTable";
import PastConversations from "./components/Chat/PastConversations";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeContext";
import { ChatProvider } from "./contexts/ChatContext";
import { FeedbackProvider } from "./contexts/FeedbackContext";

const App = () => {
  const { darkMode } = useThemeContext();
  const [currentView, setCurrentView] = useState("chat");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const renderView = () => {
    switch (currentView) {
      case "chat":
        return <ChatBox />;
      case "feedback":
        return (
          <FeedbackForm onFormComplete={() => setCurrentView("feedbackTable")} />
        );
      case "feedbackTable":
        return <FeedbackTable />;
      case "pastConversations":
        return <PastConversations />;
      default:
        return <ChatBox />;
    }
  };

  return (
    <ThemeProvider>
      <ChatProvider>
        <FeedbackProvider>
          <MUIThemeProvider theme={theme}>
            <CssBaseline />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
              }}
            >
              <div style={{ display: "flex", flex: 1 }}>
                <Sidebar onNavigate={setCurrentView} />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "50px",
                  }}
                >
                  <Header />
                  {renderView()}
                </div>
              </div>
              <Footer />
            </div>
          </MUIThemeProvider>
        </FeedbackProvider>
      </ChatProvider>
    </ThemeProvider>
  );
};

export default App;


