import React, { useContext, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Typography } from "@mui/material";
import TodoContext from "../context/TodoContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  useEffect(() => {
    const Todo = localStorage.getItem("Todo");
    if (Todo) {
      setTodos(JSON.parse(Todo));
    }
  }, []);
  return (
    <Box>
      <Typography variant="h5">Todo List</Typography>
      <Box pt={3}>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {todos.length > 0 ? (
            todos.map((item: any, index: any) => (
              <TreeItem nodeId={index} label={item.todo} key={index}>
                {item.subTodo.map((n: any, i: any) => (
                  <TreeItem nodeId={i + "a"} label={n} />
                ))}
              </TreeItem>
            ))
          ) : (
            <Box>No Data</Box>
          )}
        </TreeView>
      </Box>
    </Box>
  );
}
