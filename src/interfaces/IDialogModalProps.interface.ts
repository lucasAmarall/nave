import { ReactNode } from "react";
export interface IDialogoModalProps {
  title: string;
  description: string;
  showClose?: boolean;
  children?: ReactNode;
}