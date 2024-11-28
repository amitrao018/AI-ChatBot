// src/components/Feedback/FeedbackTable.jsx
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useFeedbackContext } from "../../contexts/FeedbackContext";

const FeedbackTable = () => {
  const { feedbacks } = useFeedbackContext();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Feedback Submissions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Thumbs</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedbacks.map((feedback, index) => (
              <TableRow key={index}>
                <TableCell>{feedback.thumbsUp ? "👍" : "👎"}</TableCell>
                <TableCell>{feedback.rating}</TableCell>
                <TableCell>{feedback.comment}</TableCell>
                <TableCell>
                  {new Date(feedback.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FeedbackTable;
