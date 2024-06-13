import { Box, Button, TextField } from "@mui/material";
import React from "react";

const FormInput = () => {
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
        }}
        size="small"
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
