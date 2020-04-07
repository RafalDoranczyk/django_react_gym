import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  dashboardLink: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
  },
  normalLink: {
    textDecoration: "none",
    color: theme.palette.secondary.dark,
  },

  drawer: {
    padding: "0 20px",
  },
}));
