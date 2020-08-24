import axios, { AxiosInstance } from "axios";
import { IAPIService } from "@interfaces/IAPIServcice.interface";
class APIService implements IAPIService{
  service: AxiosInstance = axios.create({
    baseURL: "https://navedex-api.herokuapp.com/v1",
    timeout: 30000
  });

  setHeaderToken(token: string){
    this.service.defaults.headers.authorization = `Bearer ${token}`;
  }

  async get<T>(resource: string, params?: object){
    return this.service.get<T>(resource, params);
  }

  async post<T>(resource: string, params: object){
    return this.service.post<T>(resource, params);
  }

  async put(resource: string, params?: object){
    return this.service.put(resource, params);
  }

  async delete<T>(resource: string){
    return this.service.delete<T>(resource);
  }

  async patch(resource: string, params?: object){
    return this.service.patch(resource, params);
  }
}
export default new APIService();