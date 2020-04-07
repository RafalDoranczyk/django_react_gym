import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Snackbar, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
  warning: {
    "& > div": {
      backgroundColor: theme.palette.warning.main,
    },
  },
  success: {
    "& > div": {
      backgroundColor: theme.palette.success.main,
    },
  },
}));

export default function ConsecutiveSnackbars({
  message,
  setMessage,
  isErrorMessage,
}) {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage("");
  };

  return (
    <Snackbar
      className={isErrorMessage ? classes.warning : classes.success}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={!!message}
      autoHideDuration={2000}
      onClose={handleClose}
      message={message}
      action={
        <>
          <Button color="inherit" size="small" onClick={handleClose}>
            CLOSE
          </Button>
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    />
  );
}
