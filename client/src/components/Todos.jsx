import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, reset } from "../features/task/taskSlice";
import TodoItem from "./TodoItem";

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                align="right"
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                align="right"
              >
                deadline
              </TableCell>
              <TableCell
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                align="right"
              >
                chek the task
              </TableCell>
              <TableCell
                sx={{
                  color: "#1976D2",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
                align="right"
              >
                delet the task
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TodoItem task={task} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Todos;
