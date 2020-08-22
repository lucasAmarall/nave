import { Theme } from "@src/interfaces/Theme.interface";

export const light = {
  texts: {
    primary: "#000000",
    secondary: "#ffff",
  },
  backgrounds: {
    primary: "#ffffff",
    secondary: "#000000",
  },
  borders: {
    primary: "#000000",
  },
  margin: (level: number = 1) => `${4 * level}px`,
  padding: (level: number = 1) => `${4 * level}px`,
};

export const dark: Theme = light;

export const themes  = { light, dark};