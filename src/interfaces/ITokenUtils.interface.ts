export type func = (hasToken: boolean) => void;

export interface ITokenUtils {
  tokenKey: string;
  listeners: func[];
  setToken(token: string): void;
  getToken(): string | null;
  removeToken(): void;
  hasToken(): boolean;
  emitEvent(): void;
  onTokenChange( call : func): void;
}