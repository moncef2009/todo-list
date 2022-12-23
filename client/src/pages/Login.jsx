import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
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
            <FaSignInAlt /> Login
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

export default Login;
