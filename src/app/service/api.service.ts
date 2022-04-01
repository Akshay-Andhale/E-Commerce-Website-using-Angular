import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tempId :number=0;
  url = "https://fakestoreapi.com/products"

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get(this.url)
  }

  getproductDetails(id:any){
    return this.http.get(`${this.url}/${id}`)
}




}
