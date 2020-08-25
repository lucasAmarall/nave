import { Theme } from "@interfaces/ITheme.interface";

type ThemeInterface = Theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}