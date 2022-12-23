import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Resgister() {
  const [emaill, setEmail] = useState({ email: "" });
  const { email } = emaill;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isSuccess, isError, message, navigate, dispatch]);
  const onChange = (e) => {
    setEmail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
    };
    dispatch(register(userData));
  };
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          textAlign: "center",
          marginTop: "3rem",
          color: "gray",
        }}
      >
        <Box>
          <Typography variant="h1" component="h1">
            <FaUser /> Register
          </Typography>
          <Typography variant="h5" component="p">
            please enter your email
          </Typography>
        </Box>

        <Box
          sx={{
            width: "40%",
          }}
        >
          <form onSubmit={onSubmit}>
            <TextField
              id="email"
              label="email"
              variant="filled"
              name="email"
              value={email}
              onChange={onChange}
              sx={{
                width: "100%",
              }}
            />

            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{ marginTop: "2rem" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Resgister;
