import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  defaultHttpHeaders:HttpHeaders = new HttpHeaders({"content-type":"application/json"});
  baseAPI:string = "http://localhost:5072/api/v1"

  constructor(private httpClient:HttpClient) {

   }

   public get<T>(URI:string,httpHeaders = this.defaultHttpHeaders){
    return this.httpClient.get<T>(`${this.baseAPI}/${URI}`,{headers: httpHeaders});
   }
}
