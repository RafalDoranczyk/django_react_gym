import React from "react";
import * as serviceWorker from "serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { theme, GlobalStyle } from "./theme";
// import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui//core/styles";
import "./interceptors";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
