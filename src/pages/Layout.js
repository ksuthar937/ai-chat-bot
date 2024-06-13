import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import FormInput from "../components/FormInput";
import Tabs from "../components/Tabs";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: { xs: "flex" }, height: "100vh" }}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100vh",
          width: "280px",
          background: "white",
        }}
      >
        <Tabs />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header>
          <Navbar />
        </header>
        <Box>
          <main>
            <Outlet />
          </main>
          <footer>
            <FormInput />
          </footer>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
