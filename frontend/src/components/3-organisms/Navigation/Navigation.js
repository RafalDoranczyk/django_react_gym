import React from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Button,
} from "@material-ui/core";
import { Menu, LockOpen } from "@material-ui/icons";
import { useStyles } from "./styles";
import SideNavigation from "./SideNavigation";
import NavigationContainer from "containers/navigation/NavigationContainer";
import UserAuthNavigation from "./UserAuthNavigation";
import { Link } from "react-router-dom";
import { login } from "urls/routes";

const Navigation = () => {
  const classes = useStyles();
  const {
    navData,
    isSideNavOpen,
    isAccountMenuOpen,
    handleAccountMenu,
    handleCloseAccountMenu,
    isAuthorized,
    anchorEl,
    toggleDrawer,
  } = NavigationContainer();

  return (
    <AppBar position="fixed">
      <Toolbar color="primary">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          AppLogo
        </Typography>

        {isAuthorized ? (
          <UserAuthNavigation
            isAccountMenuOpen={isAccountMenuOpen}
            handleAccountMenu={handleAccountMenu}
            handleCloseAccountMenu={handleCloseAccountMenu}
            anchorEl={anchorEl}
          />
        ) : (
          <Button
            component={Link}
            to={login}
            variant="contained"
            color="default"
            size="small"
            className={classes.button}
            startIcon={<LockOpen />}
          >
            Login
          </Button>
        )}

        <SideNavigation
          isSideNavOpen={isSideNavOpen}
          toggleDrawer={toggleDrawer}
          navData={navData}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
