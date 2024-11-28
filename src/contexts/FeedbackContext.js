import React, { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const useFeedbackContext = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const submitFeedback = (feedback) => {
    setFeedbacks((prev) => [...prev, { ...feedback, timestamp: new Date() }]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, submitFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};