import APIService from "..";
import { ILoginService } from "@interfaces/LoginService.interface";
import { IUser } from "@interfaces/User.interface";
import { IUserWithIdAndToken } from "@interfaces/IUserWithIdAndToken";

export default class LoginService extends APIService implements ILoginService{
  async login(user: IUser): Promise<IUserWithIdAndToken> {
    return (await this.post<IUserWithIdAndToken>("/users/login", user)).data;
  }
}