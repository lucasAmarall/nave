import { Theme } from "@interfaces/Theme.interface";

type ThemeInterface = Theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}