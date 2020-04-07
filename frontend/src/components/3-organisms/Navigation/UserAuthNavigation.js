import React from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import { AccountCircle, Notifications } from "@material-ui/icons";

const UserAuthNavigation = ({
  isAccountMenuOpen,
  handleAccountMenu,
  handleCloseAccountMenu,
  anchorEl,
}) => (
  <div>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <Notifications />
    </IconButton>

    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleAccountMenu}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>

    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isAccountMenuOpen}
      onClose={handleCloseAccountMenu}
    >
      <MenuItem onClick={handleCloseAccountMenu}>Profile</MenuItem>
      <MenuItem onClick={handleCloseAccountMenu}>My account</MenuItem>
      <MenuItem onClick={handleCloseAccountMenu}>Logout</MenuItem>
    </Menu>
  </div>
);

export default UserAuthNavigation;
