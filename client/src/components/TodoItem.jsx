import { TableCell, TableRow, Checkbox } from "@mui/material";
import React from "react";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deletTask, updateTask } from "../features/task/taskSlice";

function TodoItem({ task }) {
  const [val, setVal] = useState({
    complet: task.complet,
  });
  const dispatch = useDispatch();
  const date = new Date(task.deadline);
  const d =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() ==
    "1970/1/1"
      ? ""
      : date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  const id = task._id;

  return (
    <TableRow
      key={task._id}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        textAlign: "start",
      }}
    >
      <TableCell component="th" scope="row">
        {task.title}
      </TableCell>
      <TableCell align="right">{task.description}</TableCell>
      <TableCell align="right">{d}</TableCell>
      <TableCell align="right">
        <Checkbox
          onClick={() => {
            setVal({
              complet: !val.complet,
            });

            dispatch(updateTask({ id, val }));
          }}
        />
      </TableCell>
      <TableCell align="right">
        <TiDeleteOutline
          className="delet"
          onClick={() => dispatch(deletTask(task._id))}
        />
      </TableCell>
    </TableRow>
  );
}

export default TodoItem;
