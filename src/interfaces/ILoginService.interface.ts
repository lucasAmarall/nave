import { IUser } from "./IUser.interface";
import { IUserWithIdAndToken } from "./IUserWithIdAndToken";

export interface ILoginService {
  login(user: IUser): Promise<IUserWithIdAndToken>
}