import { Theme } from "@src/interfaces/Theme.interface";

export const light = {
  texts: {
    primary: "#000000",
    secondary: "#ffff",
    error: "red"
  },
  backgrounds: {
    primary: "#ffffff",
    secondary: "#000000",
    screen_locker: "#000000",
  },
  borders: {
    primary: "#000000",
  },
  icons: {
    primary: "#00000"
  },
  margin: (level: number = 1) => `${4 * level}px`,
  padding: (level: number = 1) => `${4 * level}px`,
};

export const dark: Theme = {
  ...light,
  texts: {
    primary: "#ffffff",
    secondary: "#131313",
    error: "red"
  },
  backgrounds: {
    primary: "#131313",
    screen_locker: "#131313",
    secondary: "#ffffff",
  },
  borders: {
    primary: "#ffffff",
  },
  icons: {
    primary: "#ffffff"
  },
};

export const themes  = { light, dark};