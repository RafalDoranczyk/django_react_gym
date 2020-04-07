import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon } from "@material-ui/core";
import { MoreVert, Update, Delete } from "@material-ui/icons";

const SimpleMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleAccountMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleAccountMenu} aria-label="settings">
        <MoreVert />
      </IconButton>
      <Menu
        id="settings"
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
        open={open}
        onClose={handleCloseAccountMenu}
      >
        <MenuItem onClick={handleCloseAccountMenu}>
          <ListItemIcon>
            <Update color="primary" />
          </ListItemIcon>
          Update
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Delete color="secondary" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SimpleMenu;
