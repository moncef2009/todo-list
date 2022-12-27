import {
  TableCell,
  TableRow,
  Checkbox,
  Menu,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deletTask, updateTask } from "../features/task/taskSlice";

function TodoItem({ task }) {
  const [val, setVal] = useState({
    complet: task.complet,
  });

  const [val2, setVal2] = useState({
    deadline: "",
  });

  const [clickedEL, setClickedEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleChanche = () => {
    setVal(!val.complet);
    dispatch(updateTask([id, { complet: !val.complet }]));
  };
  const onChange = (e) => {
    setVal2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    setClickedEl(e.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
    dispatch(updateTask([id, { deadline: val2.deadline }]));
  };

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
      <TableCell align="right">
        {d} <RxUpdate className="update" onClick={handleClick} />
        <Menu open={open} anchorEl={clickedEL}>
          <TextField
            id="deadline"
            name="deadline"
            label="deadline"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            onChange={onChange}
          />
          <Button onClick={handleClose}>Ok</Button>
        </Menu>
      </TableCell>
      <TableCell align="right">
        <Checkbox onChange={handleChanche} checked={val.complet} />
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
