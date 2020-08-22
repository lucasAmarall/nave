export interface IInputProps {
  placeholder: string;
  value: string| number;
  onChange: (value: string) => void;
  props?: unknown;
  title?: string;
}