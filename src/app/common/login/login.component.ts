import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import {login } from '../../model/loginmodel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard,MatCardHeader,MatCardContent,MatCardActions,MatInputModule,
    MatFormFieldModule,MatSelectModule,MatButton,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  _logindata : login = {username :"", password :""};

  constructor(private service : MasterService,private router : Router){

  }
  ngOnInit(): void {
    localStorage.clear();
  }

  ProceedLogin(form : any){
    if(form.valid)
    {
        this.service.ProceedLogin(this._logindata).subscribe(item =>{
          let _resp = item;
          // console.log(_resp);
          if(_resp.length>0){
            localStorage.setItem("username",this._logindata.username);
            this.router.navigateByUrl('');
          }
          else
          {
            alert('Invalid credentals');
          }
        });
    }
   }

   reset(){

   }


}
