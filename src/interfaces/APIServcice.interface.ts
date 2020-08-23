import { AxiosResponse, AxiosInstance } from "axios";

export interface IAPIService {
  service: AxiosInstance;
  
  setHeaderToken(token: string) : void;
  get(resource: string, params: object): Promise<AxiosResponse>;
  post(resource: string, params: object): Promise<AxiosResponse>;
  put(resource: string, params: object): Promise<AxiosResponse>;
  delete(resource: string ): Promise<AxiosResponse>;
  patch(resource: string, params: object): Promise<AxiosResponse>;
}