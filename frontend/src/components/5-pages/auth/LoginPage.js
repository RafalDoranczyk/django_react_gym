import React from "react";
import { Box, Typography } from "@material-ui/core";
import LoginForm from "components/3-organisms/auth/LoginForm";

const LoginPage = () => (
  <Box
    flexDirection="column"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="h5" component="span">
      Get log in!
    </Typography>
    <LoginForm />
  </Box>
);

export default LoginPage;
