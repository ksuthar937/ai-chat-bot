import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { askQuestion } from "../redux/chatSlice";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(askQuestion(userInput));
    setUserInput("");
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
      >
        Save
      </Button>
    </Box>
  );
};

export default FormInput;
