import { INaver } from "@interfaces/INaver.interface";

export interface INaversListProps {
  onDetail: (naver: INaver) => void;
  onEdit: (naver: INaver) => void;
  onDelete: (naver: INaver) => void;
}
