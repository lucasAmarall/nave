import { Theme } from "@interfaces/ITheme.interface";
import { ILogoProps } from "./ILogoProps.interface";

export interface IThemeLogoProps extends ILogoProps {
  theme: Theme;
}
