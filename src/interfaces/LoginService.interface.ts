import { IUser } from "./User.interface";
import { IUserWithIdAndToken } from "./IUserWithIdAndToken";

export interface ILoginService {
  login(user: IUser): Promise<IUserWithIdAndToken>
}