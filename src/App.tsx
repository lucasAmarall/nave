import React from "react";
import Router from "@src/Router";
import BaseCss from "@atoms/BaseCss";
import Icons from "@atoms/Icons";
import { ThemeProvider } from "styled-components";
import { themes } from "@constants/theme";

const App = () => {
  const theme = themes.light;
  return (
    <>
      <BaseCss />
      <Icons />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
