import { INaver } from "@interfaces/INaver.interface";
export interface INavaerService {
  list(): Promise<INaver[]>
}