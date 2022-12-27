import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, reset } from "../features/task/taskSlice";

function Todos() {
  const dispatch = useDispatch();

  const { tasks, isLoading } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      {tasks.map((task) => (
        <div>
          <h1>{task.title}</h1>
          <h1>{task.createdAt}</h1>
          <h1>{task.deadline}</h1>
          <h1>{task.description}</h1>
        </div>
      ))}
    </>
  );
}

export default Todos;
