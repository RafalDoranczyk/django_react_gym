import { useState, useEffect, useContext } from "react";
import { authNav, notAuthNav } from "./navigationData";
import AuthContext from "context/AuthContext";

const NavigationContainer = () => {
  const { isAuthorized } = useContext(AuthContext);
  const [navData, setNavData] = useState([]);
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isAccountMenuOpen = Boolean(anchorEl);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideNavOpen(open);
  };

  const handleAccountMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isAuthorized) {
      setNavData(authNav);
    } else {
      setNavData(notAuthNav);
    }
  }, [isAuthorized]);

  return {
    navData,
    isSideNavOpen,
    setSideNavOpen,
    isAccountMenuOpen,
    handleAccountMenu,
    handleCloseAccountMenu,
    isAuthorized,
    anchorEl,
    toggleDrawer,
    setAnchorEl
  };
};

export default NavigationContainer;
