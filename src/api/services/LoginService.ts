import APIService from "..";
import { ILoginService } from "@interfaces/ILoginService.interface";
import { IUser } from "@interfaces/IUser.interface";
import { IUserWithIdAndToken } from "@interfaces/IUserWithIdAndToken";

export default class LoginService implements ILoginService{
  async login(user: IUser): Promise<IUserWithIdAndToken> {
    return (await APIService.post<IUserWithIdAndToken>("/users/login", user)).data;
  }
}