import React, { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthContext from "./context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const theme = createTheme();
function App() {
  const [token, setToken] = useState("");
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const value: any = localStorage.getItem("token");
      setToken(value);
    }
    isLoading(false);
  }, []);
  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress size={100} />
      </Box>
    );
  }
  return (
    <ThemeProvider theme={theme}>
       <ToastContainer />
      <AuthContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
