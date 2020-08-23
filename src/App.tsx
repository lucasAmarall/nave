import React from "react";
import Router from "@src/Router";
import BaseCss from "@atoms/BaseCss";
import Icons from "@atoms/Icons";
import { ThemeProvider } from "styled-components";
import { themes } from "@constants/theme";
import ScreenLocker from "@atoms/ScreenLocker";
import Modal from "@atoms/Modal";

const App = () => {
  // const theme = themes.light;
  const theme = themes.dark;
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <BaseCss />
        <Icons />
        <Router />
        <ScreenLocker />
        <Modal />
      </ThemeProvider>
    </>
  );
};

export default App;
