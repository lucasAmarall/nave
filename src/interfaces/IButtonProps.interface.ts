import { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  loading?:boolean;
}