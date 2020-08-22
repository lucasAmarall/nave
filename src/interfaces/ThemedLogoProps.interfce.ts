import { Theme } from "@interfaces/Theme.interface";
import { ILogoProps } from "./LogoProps.interface";

export interface IThemeLogoProps extends ILogoProps {
  theme: Theme;
}
