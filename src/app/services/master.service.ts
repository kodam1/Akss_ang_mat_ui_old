import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, user } from '../model/loginmodel'
import { Observable } from 'rxjs'
import { Customer } from '../model/Customer';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {}


  GetcolorList() : colorentity[]{

    return [
      {code :"c0", name: "black",},
      {code :"c1", name: "Red",},
      {code :"c2", name: "Green",},
      {code :"c3", name: "Yellow",},
      {code :"c4", name: "White",}
    ];
  }

  GetCustomer(): Observable<Customer[]>{
    console.log("GetCustomer called with MasterService");
    return this.http.get<Customer[]>("http://localhost:3000/customer")
  }

    ProceedLogin( _data: login){
       return this.http.get<user[]>('http://localhost:3000/user/?id=' + _data.username + '&password=' + _data.password);
    }

    IsLoggedIn(){
       return localStorage.getItem('username')!= null;
    }

    ProceedRegister( _data: user){
      return this.http.post('http://localhost:3000/user/?id=' , _data);
   }

   }
