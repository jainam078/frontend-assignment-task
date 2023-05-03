import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Box } from "@mui/material";
import AuthContext from "../context/AuthContext";
function Layout() {
  const { token } = useContext(AuthContext);
  return (
    <Box>
      {token && <Navbar />}
      <Outlet />
    </Box>
  );
}

export default Layout;
