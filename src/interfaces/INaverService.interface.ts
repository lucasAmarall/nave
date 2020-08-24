import { INaver } from "@interfaces/INaver.interface";
import { IDeleteNaverResponse } from "./IDeleteNaverResponse.interface";
import { INewNaver } from "./INewNaver.interface";
export interface INavaerService {
  get(): Promise<INaver[]>;
  delete( id: string): Promise<IDeleteNaverResponse>;
  post( naver: INewNaver ): Promise<INewNaver>;
}