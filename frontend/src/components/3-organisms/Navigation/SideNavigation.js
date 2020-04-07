import React from "react";
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
} from "@material-ui/core";
import * as S from "./styles";
import { ingredients, dashboard } from "urls/routes";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
const SideNavigation = ({ navData, toggleDrawer, isSideNavOpen }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={isSideNavOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div
        className={classes.drawer}
        role="navigation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navData.map(({ txt, to, icon }) => (
            <Box
              className={
                to === dashboard ? classes.dashboardLink : classes.normalLink
              }
              component={Link}
              key={txt}
              to={to}
            >
              {to === ingredients && <Divider />}
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primary={txt}
                  secondary={to === dashboard && "Daily goals"}
                />
              </ListItem>
            </Box>
          ))}
        </List>
        <Divider light />
      </div>
    </SwipeableDrawer>
  );
};

export default SideNavigation;
