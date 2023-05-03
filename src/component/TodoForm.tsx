/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import TodoContext from "../context/TodoContext";
function TodoForm() {
  const { setTodos, todos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [subTitle, useSubTitle] = useState([""]);
  const handleSubtitle = (e: any, i: any) => {
    const list = [...subTitle];
    list[i] = e.target.value.replace(/\s{2,}/g, " ").trim();
    useSubTitle(list);
  };
  const handleTodo = () => {
    const list = [...subTitle].filter((item) => item !== "");
    if (!title || list.length === 0) {
      toast.error("Enter the Value");
      return;
    }
    const value = {
      todo: title,
      subTodo: list,
    };
    const todoData = [...todos, value];
    localStorage.setItem("Todo", JSON.stringify(todoData));
    setTodos(todoData);
  };
  return (
    <Box pt={6}>
      <Typography variant="h5">Add Todo</Typography>
      <Box pt={3}>
        <Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Todo Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            multiline
            maxRows={4}
          />
        </Box>
        <Box pt={2} className="inputGroup">
          {subTitle.map((item, i) => (
            <TextField
              id="outlined-multiline-flexible"
              label="Todo Sublist"
              onChange={(e) => handleSubtitle(e, i)}
              multiline
              maxRows={4}
            />
          ))}

          <Button onClick={() => useSubTitle([...subTitle, ""])}>
            <AddIcon />
          </Button>
        </Box>
        <Box pt={2}>
          <Button variant="contained" onClick={() => handleTodo()}>
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TodoForm;
