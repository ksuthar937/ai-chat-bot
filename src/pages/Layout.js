import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import FormInput from "../components/FormInput";
import Tabs from "../components/Tabs";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: { xs: "flex" } }}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100vh",
          width: "240px",
          background: "white",
        }}
      >
        <Tabs />
      </Box>
      <Box
        sx={{
          width: "auto",
        }}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer
          style={{
            position: "fixed",
            bottom: 0,
          }}
        >
          <FormInput />
        </footer>
      </Box>
    </Box>
  );
};

export default Layout;
