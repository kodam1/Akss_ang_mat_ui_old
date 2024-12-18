import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/Productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl="http://localhost:3000/Products";

  constructor(private http:HttpClient) {}

    GetAll(){
      return this.http.get<Products[]>(this.baseurl);
    }

    GetProductbyId(id:number){
      return this.http.get<Products>(this.baseurl + "/" + id);
    }


    CreateProduct(_data:Products){
      return this.http.post<Products>(this.baseurl,_data);
    }

    UpdateProduct(_data:Products){
      return this.http.put(this.baseurl + "/" + _data.id,_data);
    }

    Removeproduct(id:number){
      return this.http.delete(this.baseurl + "/" + id);
    }
}

