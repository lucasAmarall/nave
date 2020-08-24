import { IButtonProps } from "@interfaces/IButtonProps.interface";
import { Theme } from "./ITheme.interface";

export interface IThemedButtonProps extends IButtonProps{
  theme: Theme;
}