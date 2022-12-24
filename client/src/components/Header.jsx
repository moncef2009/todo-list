import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const { logedout } = useSelector((state) => state.auth);

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

            {logedout ? (
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
