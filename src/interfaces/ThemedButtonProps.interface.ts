import { IButtonProps } from "@interfaces/ButtonProps.interface";
import { Theme } from "./Theme.interface";

export interface IThemedButtonProps extends IButtonProps{
  theme: Theme;
}