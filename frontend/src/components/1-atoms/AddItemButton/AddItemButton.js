import React from "react";
import { IconButton, Box, makeStyles } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  big: {
    fontSize: "40px",
  },
});

export default function IconButtons({ to }) {
  const classes = useStyles();
  return (
    <Box to={to} component={Link} position="fixed" bottom="3px" right="3px">
      <IconButton color="secondary" aria-label="add to shopping cart">
        <AddCircle className={classes.big} fontSize="large" />
      </IconButton>
    </Box>
  );
}
