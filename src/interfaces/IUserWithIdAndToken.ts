import { IUser } from "@interfaces/User.interface";

export interface IUserWithIdAndToken extends IUser {
  email: string;
  id: string;
  token: string;
}