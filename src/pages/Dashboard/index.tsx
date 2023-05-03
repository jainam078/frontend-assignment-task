import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import TodoList from "../../component/TodoList";
import TodoForm from "../../component/TodoForm";
import TodoContext from "../../context/TodoContext";
function Dashboard() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [todos, setTodos] = useState<[]>([]);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Container>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <TodoList />
          <TodoForm />
        </TodoContext.Provider>
      </Container>
    </Box>
  );
}

export default Dashboard;
