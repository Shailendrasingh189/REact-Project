
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem('todos')): []);
  
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log(id);
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Box
      sx={{
        background: "#ffffff",
        placeSelf: "center",
        width: "91.5%",
        maxWidth: "28rem",
        display: "flex",
        flexDirection: "column",
        minHeight: "34.375rem",
        borderRadius: "0.375rem",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1.75rem",
          gap: "0.5rem",
          border: "none",
          padding: "0.25rem",
        }}
      >
        <AddBoxIcon sx={{ fontSize: "2.25rem", color: "#0288d1" }} />
        <Typography
          level="h1"
          sx={{
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: "600",
          }}
        >
          To-Do List
        </Typography>
      </Paper>
      <Box display="flex" gap={2} margin={"0 1.275rem"}>
        <TextField
          inputRef={inputRef}
          placeholder="Task"
          sx={{ width: "360px" }}
        />
        <Button
          onClick={add}
          variant="contained"
          sx={{ lineHeight: "1.5", padding: "14px 30px" }}
        >
          Add+
        </Button>
      </Box>
      <Container sx={{ marginTop: "1rem" }}>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default Todo;
