import { INaver } from "@interfaces/INaver.interface";

export interface INaverItemProp extends INaver{
  onEdit: (data: INaver) => void;
  onDelete: (data: INaver) => void;
}