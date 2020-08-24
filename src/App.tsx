import React, { useState, useEffect } from "react";
import Router from "@src/Router";
import BaseCss from "@atoms/BaseCss";
import Icons from "@atoms/Icons";
import { ThemeProvider } from "styled-components";
import { themes } from "@constants/theme";
import ScreenLocker from "@atoms/ScreenLocker";
import Modal from "@atoms/Modal";
import ChangeThemeButton from "@atoms/ChangeThemeButton";
import { Theme } from "@interfaces/ITheme.interface";

const App = () => {
  const [isLight, setIsLight] = useState(!localStorage.getItem("theme"));
  const [theme, setTheme] = useState<Theme>(themes[(isLight ? "light": "dark")]);
  const toggleTheme = () => {
    localStorage.setItem("theme", (theme.light ? "" : "1"));
    setTheme(theme.light ? themes.dark : themes.light);
  };

  useEffect(() => {
    setIsLight(theme.light);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BaseCss />
        <Icons />
        <Router />
        <ScreenLocker />
        <Modal />
        <ChangeThemeButton onChange={toggleTheme} checked={isLight}/>
      </ThemeProvider>
    </>
  );
};

export default App;
