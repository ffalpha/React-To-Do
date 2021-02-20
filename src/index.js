import ReactDom from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./utils/theme";
import GlobalStyle from "./utils/global";
ReactDom.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyle />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
