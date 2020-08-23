import { INaver } from "@interfaces/INaver.interface";

export interface INaversListProps {
  onEdit: (naver: INaver) => void;
  onDelete: (naver: INaver) => void;
}
