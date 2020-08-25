import { INewNaver } from "./INewNaver.interface";

export interface INaverCreationForm {
  naver: INewNaver,
  loading?:boolean;
  onSubmit: (naver: INewNaver, valid: boolean) => void | Promise<void>,
  onUpdate: (naver: INewNaver) => void
}