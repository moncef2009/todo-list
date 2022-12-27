import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/task/taskSlice";
import { useNavigate } from "react-router-dom";

function MyForm() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    deadline: "",
    complet: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask(todo));

    setTodo({
      title: "",
      description: "",
      deadline: "",
    });
    navigate("/");
  };
  return (
    <Box
      display="flex"
      sx={{ alignItems: "center", flexDirection: "column", color: "gray" }}
    >
      <Typography variant="h1" component="h1">
        Add a Todo
      </Typography>
      <form onSubmit={onSubmit}>
        <Box
          display="flex"
          sx={{
            gap: 2,
            width: "50rem",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            id="title"
            label="title"
            variant="filled"
            name="title"
            onChange={onChange}
            value={todo.title}
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="description"
            label="description"
            variant="filled"
            name="description"
            multiline
            onChange={onChange}
            value={todo.description}
            rows={4}
            sx={{
              width: "100%",
            }}
          />

          <TextField
            id="deadline"
            name="deadline"
            label="deadline"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            onChange={onChange}
            value={todo.deadline}
          />

          <Button type="submit">Subm</Button>
        </Box>
      </form>
    </Box>
  );
}

export default MyForm;
