import { light } from "@constants/theme";
import { Theme } from "./Theme.interface";

export interface IBaseFontStyle {
  color?: keyof typeof light.texts;
  theme: Theme;
}
