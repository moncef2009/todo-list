import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie === "") {
      navigate("/login");
    }
  }, [document.cookie, navigate]);

  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          paddingTop: "5rem",
        }}
      >
        <Button
          sx={{
            color: "#1976D2",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          LinkComponent={Link}
          to="/add_todo"
          variant="outlined"
        >
          Add a todo
        </Button>
        <Button
          sx={{
            color: "#1976D2",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          LinkComponent={Link}
          to="/todos"
          variant="outlined"
        >
          Todo's
        </Button>
      </Box>
    </>
  );
}

export default Home;
