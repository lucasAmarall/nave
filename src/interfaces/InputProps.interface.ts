import { InputHTMLAttributes } from "react";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  placeholder: string;
  value: string| number;
  onUpdate: (value: string) => void;
  props?: unknown;
  title?: string;
}