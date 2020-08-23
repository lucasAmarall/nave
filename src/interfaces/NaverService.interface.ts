import { INaver } from "@interfaces/INaver.interface";
import { IDeleteNaverResponse } from "./IDeleteNaverResponse.interface";
export interface INavaerService {
  get(): Promise<INaver[]>;
  delete( id: string): Promise<IDeleteNaverResponse>;
}