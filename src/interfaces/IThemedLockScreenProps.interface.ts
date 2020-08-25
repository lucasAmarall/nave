import { Theme } from "@interfaces/ITheme.interface";
import { ILockScreenProps } from "@interfaces/ILockscreen.interface";

export interface IThemedLockScreenProps extends ILockScreenProps {
  theme: Theme;
}
