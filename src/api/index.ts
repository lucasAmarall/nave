import axios, { AxiosInstance } from "axios";
import { IAPIService } from "@interfaces/APIServcice.interface";
class APIService implements IAPIService{
  service: AxiosInstance = axios.create({
    baseURL: "https://navedex-api.herokuapp.com/v1",
    timeout: 3000
  });

  addHeaderToken(token: string){
    this.service.defaults.headers.authorization = `Bearer ${token}`;
  }

  async get(resource: string, params?: object){
    return this.service.get(resource, params);
  }

  async post<T>(resource: string, params: object){
    return this.service.post<T>(resource, params);
  }

  async put(resource: string, params?: object){
    return this.service.put(resource, params);
  }

  async delete(resource: string){
    return this.service.delete(resource);
  }

  async patch(resource: string, params?: object){
    return this.service.patch(resource, params);
  }
}
export default APIService;