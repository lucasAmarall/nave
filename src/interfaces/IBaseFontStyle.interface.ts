import { light } from "@constants/theme";
import { Theme } from "./ITheme.interface";

export interface IBaseFontStyle {
  color?: keyof typeof light.texts;
  theme: Theme;
}
