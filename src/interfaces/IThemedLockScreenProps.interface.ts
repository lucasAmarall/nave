import { Theme } from "@interfaces/Theme.interface";
import { ILockScreenProps } from "@interfaces/ILockscreen.interface";

export interface IThemedLockScreenProps extends ILockScreenProps {
  theme: Theme;
}
