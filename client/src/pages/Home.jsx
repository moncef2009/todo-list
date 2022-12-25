import { Button } from "@mui/material";
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
      <Button LinkComponent={Link} to="/add_todo">
        Add a todo
      </Button>
      <Button LinkComponent={Link} to="/todos">
        Todo's
      </Button>
    </>
  );
}

export default Home;
