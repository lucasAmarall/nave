import APIService from "..";
import { INavaerService } from "@interfaces/NaverService.interface";
import { INaver } from "@interfaces/INaver.interface";
import { IDeleteNaverResponse } from "@interfaces/IDeleteNaverResponse.interface";

export default class NaversService implements INavaerService{

  async get(): Promise<INaver[]> {
    return (await APIService.get<INaver[]>("/navers")).data;
  }

  async delete(id: string): Promise<IDeleteNaverResponse> {
    return (await APIService.delete<IDeleteNaverResponse>(`/navers/${id}`)).data;
  }
}