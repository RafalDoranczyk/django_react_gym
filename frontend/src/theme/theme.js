import {
  blue,
  lightBlue,
  purple,
  red,
  green,
  lightGreen,
} from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue["50"],
      main: blue["500"],
    },
    secondary: {
      main: red["A100"],
      light: red["100"],
    },
    warning: {
      main: red["300"],
    },
  },
});

export default theme;
