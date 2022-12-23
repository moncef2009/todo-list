import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const cookie = document.cookie;
  useEffect(() => {
    if (cookie) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, [cookie]);

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar display="flex" sx={{ justifyContent: "space-around" }}>
            <div>
              <Button color="inherit" variant="h5" LinkComponent={Link} to="/">
                Home
              </Button>
            </div>

            {isLogedIn ? (
              <Button color="inherit" onClick={onLogout}>
                <FaSignOutAlt />
                Logout
              </Button>
            ) : (
              <div>
                <Button color="inherit" LinkComponent={Link} to="/login">
                  <FaSignInAlt />
                  Login
                </Button>
                <Button color="inherit" LinkComponent={Link} to="/register">
                  <FaUser />
                  register
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
