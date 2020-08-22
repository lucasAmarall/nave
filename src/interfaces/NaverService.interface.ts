import { INaver } from "@interfaces/KKINaver.interface";
export interface INavaerService {
  list(): Promise<INaver[]>
}