import { INaver } from "@interfaces/KKINaver.interface";

export interface INaverItemProp extends INaver{
  onEdit: (data: INaver) => void;
  onDelete: (data: INaver) => void;
}