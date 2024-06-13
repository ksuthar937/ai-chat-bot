import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PencilLogo from "../assets/pencil.svg";
import AiBotLogo from "../assets/BotAI_Logo.png";

const Tabs = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        background: "var(--color-secondary1)",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: 40,
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            ml: -1,
          }}
        >
          <img src={AiBotLogo} alt="ai chat bot logo" />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 400,
            color: "var(--color-black)",
            fontSize: "24px",
            fontFamily: "Ubuntu",
          }}
        >
          New Chat
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: -2 }}
        >
          <img src={PencilLogo} alt="pencil" width={24} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Tabs;
