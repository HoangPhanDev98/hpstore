import { AccountCircle, Close } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import "./header.scss";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    setAnchorEl(null);
  };

  return (
    <div>
      <Box className="header">
        <AppBar position="static">
          <Toolbar>
            <CodeIcon className="header__icon"></CodeIcon>
            <Typography className="header__logo" variant="h6" component="div">
              <Link to="/" className="header__link">
                HP Store
              </Link>
            </Typography>
            <NavLink to="todos" className="header__link">
              <Button color="inherit">Todos</Button>
            </NavLink>
            <NavLink to="albums" className="header__link">
              <Button color="inherit">Albums</Button>
            </NavLink>
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            )}

            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleUserClick}>
                <AccountCircle />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Box>

      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "escapeKeyDown" && reason !== "backdropClick") {
            setOpen(false);
          }
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: "8px", right: "8px" }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
