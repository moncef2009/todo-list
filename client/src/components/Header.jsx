import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
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
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
