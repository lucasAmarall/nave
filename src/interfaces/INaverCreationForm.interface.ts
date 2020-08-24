import { INewNaver } from "./INewNaver.interface";

export interface INaverCreationForm {
  naver: INewNaver,
  onSubmit: (naver: INewNaver) => void | Promise<void>,
  onUpdate: (naver: INewNaver) => void
}