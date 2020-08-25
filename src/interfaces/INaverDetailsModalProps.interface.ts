import { INaver } from "@interfaces/INaver.interface";

export interface INaverDetailsModalProps {
  naver?: INaver;
  isOpen: boolean;
  onClose: () => void;
  onDelete: (naver: INaver) => void;
  onEdit: (naver: INaver) => void;
}