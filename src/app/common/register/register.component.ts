import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatFormField, MatLabel, MatSelect } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { Role, user } from '../../model/loginmodel';
import { MasterService } from '../../services/master.service';
// import { pipe } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,MatCardModule,MatCardHeader,MatCardContent,MatCardActions,MatButton,
    MatCheckbox,MatRadioButton,MatSelect,CommonModule,MatFormField,MatLabel,RouterLink,MatInputModule,
    MatSelectModule,MatRadioGroup
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  Roles: Role[] = [
    {value: 'salesman', viewValue: 'salesman'},
    {value: 'supervisor', viewValue: 'supervisor'},
    {value: 'manager', viewValue: 'manager'},
  ];

// reisterform = new FormGroup({
//   username :new FormControl('',Validators.required),
//   name :new FormControl('', Validators.compose([Validators.required,Validators.minLength(5)]) ),
//   email :new FormControl('admin', Validators.compose([Validators.required,Validators.email]) ),
//   roles :new FormControl('salesman', Validators.required),
//   gender :new FormControl('m', Validators.required),
//   terms :new FormControl(true, Validators.requiredTrue)
// })

constructor( private builder: FormBuilder,private service:MasterService,private router:Router){

}

registerform = this.builder.group({
  username :this.builder.control('',Validators.required),
  name :this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)]) ),
  password :this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)]) ),
  email :this.builder.control('admin', Validators.compose([Validators.required,Validators.email]) ),
  role :this.builder.control('salesman', Validators.required),
  gender :this.builder.control('m', Validators.required),
  terms :this.builder.control(true, Validators.requiredTrue)
})

// id: string,
// password: string;
// name: string;
// email:string;
// role: string;
// gender:string;
// terms:string;

  ProceedRegister(){
    console.log(' im in ProceedRegister');
    if(this.registerform.valid){

      // if (this.registerform.valid.terms){
      if (this.registerform.get('terms')?.value){
        let _data:user={
          id: this.registerform.value.username as string,
          password: this.registerform.value.password as string,
          name: this.registerform.value.name as string,
          role: this.registerform.value.role as string,
          gender: this.registerform.value.gender as string,
          email: this.registerform.value.email as string
        }
          this.service.ProceedRegister(_data).subscribe(item=>{
            alert('registered successfully !');
            this.router.navigateByUrl('/login');
          });
          // console.log(_data);
      }
      else{
        alert('Please agree terms & conditions then proceed !');
      }
    }else{
      alert('Please agree terms & conditions then proceed !');
    }

  }


}
