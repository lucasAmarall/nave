import { INaver } from "@interfaces/INaver.interface";

export interface IDeleteNaverModalProps {
  onClose: () => void;
  naver?: INaver;
  isOpen?:boolean;
}