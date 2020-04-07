import React from "react";
import { Box, Typography } from "@material-ui/core";
import SignupForm from "components/3-organisms/auth/SignupForm";

const SignupPage = () => (
  <Box
    flexDirection="column"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="h5" component="span">
      Join now!
    </Typography>
    <SignupForm />
  </Box>
);

export default SignupPage;
