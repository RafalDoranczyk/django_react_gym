import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import * as ROUTES from "urls/routes";

const AppContainer = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isAuthorized, setAuthorized] = useState(null);
  const [time, setTime] = useState(0);
  const getAuth = () => isAuthorized;

  useEffect(() => {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, [isAuthorized]);

  const protectedRoute = (Container, props) => {
    return getAuth() ? (
      <Container {...props} />
    ) : (
      <Redirect to={ROUTES.notAllowed} />
    );
  };

  return {
    protectedRoute,
    isModalOpen,
    setModalOpen,
    isAuthorized,
    setAuthorized,
    time,
    setTime,
  };
};

export default AppContainer;
