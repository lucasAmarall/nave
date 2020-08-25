import { INaver } from "@interfaces/INaver.interface";
import { IDeleteNaverResponse } from "./IDeleteNaverResponse.interface";
import { INewNaver } from "./INewNaver.interface";
export interface INavaerService {
  get(): Promise<INaver[]>;
  getById( id: string ): Promise<INaver>;
  post( naver: INewNaver ): Promise<INewNaver>;
  delete( id: string): Promise<IDeleteNaverResponse>;
  update( id: string, naver: INaver ): Promise<INaver>;
}