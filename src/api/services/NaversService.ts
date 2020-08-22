import APIService from "..";
import { INavaerService } from "@interfaces/NaverService.interface";
import { INaver } from "@interfaces/KKINaver.interface";

export default class NaversService implements INavaerService{

  async list(): Promise<INaver[]> {
    return (await APIService.get<INaver[]>("/navers")).data;
  }
}