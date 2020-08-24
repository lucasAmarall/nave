import { INewNaver } from "./INewNaver.interface";

export interface INaverCreationForm {
  naver: INewNaver,
  loading?:boolean;
  onSubmit: (naver: INewNaver) => void | Promise<void>,
  onUpdate: (naver: INewNaver) => void
}