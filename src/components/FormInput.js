import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  aiBotResponse,
  askQuestion,
  saveCurrentConversation,
  setResponses,
} from "../redux/chatSlice";

import responseData from "../sampleData.json";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");

  const responses = useSelector((state) => state.customizedResponses);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (userInput.trim()) {
      const response = responses.find(
        (res) => res.question.toLowerCase() === userInput.toLowerCase()
      );
      dispatch(askQuestion(userInput));
      setUserInput("");

      setTimeout(() => {
        dispatch(
          aiBotResponse(
            response ? response.response : "I don't undestood that question!"
          )
        );
      }, [2000]);
    }
  };

  useEffect(() => {
    dispatch(setResponses(responseData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveChat = () => {
    dispatch(saveCurrentConversation());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        m: 2,
      }}
    >
      <TextField
        fullWidth
        sx={{
          background: "var(--color-white)",

          borderRadius: "5px",
        }}
        size="small"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask something to Bot AI"
      />
      <Button
        sx={{
          color: "var(--color-black)",
          background: "var(--color-secondary1)",
          fontWeight: 700,
          ":hover": {
            background: "var(--color-primary2)",
          },
        }}
        variant="contained"
        size="medium"
        onClick={handleSubmit}
        disabled={userInput === ""}
      >
        Ask
      </Button>
      <Button
        sx={{
          color: "var(--color-black)",
          background: "var(--color-secondary1)",
          fontWeight: 700,
          ":hover": {
            background: "var(--color-primary2)",
          },
        }}
        variant="contained"
        size="medium"
        onClick={handleSaveChat}
      >
        Save
      </Button>
    </Box>
  );
};

export default FormInput;
