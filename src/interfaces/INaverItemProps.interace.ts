import { INaver } from "@interfaces/INaver.interface";

export interface INaverItemProp extends INaver{
  onDetail: (data: INaver) => void;
  onEdit: (data: INaver) => void;
  onDelete: (data: INaver) => void;
}