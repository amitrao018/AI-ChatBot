// src/components/Feedback/FeedbackForm.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Rating,
  Grid,
} from "@mui/material";
import { useFeedbackContext } from "../../contexts/FeedbackContext";

const FeedbackForm = ({ onFormComplete }) => {
  const [thumbsUp, setThumbsUp] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { submitFeedback } = useFeedbackContext();

  const handleSubmit = () => {
    const feedback = { thumbsUp, rating, comment };
    submitFeedback(feedback); // Save feedback in context
    setThumbsUp(null);
    setRating(0);
    setComment("");
    onFormComplete(); // Navigate to feedback table
  };

  return (
    <Box sx={{ p: 2, borderRadius: 2, bgcolor: "grey.100", boxShadow: 2 }}>
      <Typography variant="h6" gutterBottom>
        Provide Your Feedback
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Thumbs Up/Down</Typography>
          <Grid container justifyContent="space-between">
            <Button
              variant={thumbsUp === true ? "contained" : "outlined"}
              onClick={() => setThumbsUp(true)}
            >
              👍
            </Button>
            <Button
              variant={thumbsUp === false ? "contained" : "outlined"}
              onClick={() => setThumbsUp(false)}
            >
              👎
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">Rating (1 to 5)</Typography>
          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            size="large"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Additional Comments</Typography>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={thumbsUp === null || rating === 0}
          >
            Submit Feedback
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeedbackForm;
