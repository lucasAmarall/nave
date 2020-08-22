import { ITokenUtils, func } from "@interfaces/TokenUtils.interface";

class TokenUtils implements ITokenUtils {
  tokenKey = `${window.location.host}-TOKEN`;
  listeners: func[] = [];

  setToken(token: string){
    localStorage.setItem(this.tokenKey, token);
    this.emitEvent();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(){
    localStorage.removeItem(this.tokenKey);
    this.emitEvent();
  }

  hasToken(): boolean{
    return !!localStorage.getItem(this.tokenKey);
  }

  emitEvent(){
    this.listeners.map( func => func(this.hasToken()));
  }

  onTokenChange( call : func){
    this.listeners.push(call);
  }
}

export default new TokenUtils();