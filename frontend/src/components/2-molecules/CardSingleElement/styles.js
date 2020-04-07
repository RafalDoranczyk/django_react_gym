import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "35.25%", // 16:9
  },
  broken: {
    display: "flex",
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  list: {
    maxWidth: 345,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    margin: 0,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
}));
