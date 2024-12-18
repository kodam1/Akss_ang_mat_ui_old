import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import {  MatCheckboxModule } from '@angular/material/checkbox';
// import { CommonModule } from '@angular/common';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { Products } from '../../model/Productmodel';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,MatFormFieldModule,MatButtonModule,
            MatInputModule,MatCheckboxModule,MatCardModule,MatCardContent,MatCardHeader,MatCardActions
    ],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {

  _dialogdata : any;
  _productInfo !: Products;

  constructor(private service : ProductService,private builder : FormBuilder,
    private ref:MatDialogRef<AddproductComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
    private toastr: ToastrService
  ){

  }
  ngOnInit(): void {
   this._dialogdata = this.data;
   let editid = this._dialogdata.id as number;
  //  console.log(this._dialogdata);
  if( editid != 0 )
  {
        this.service.GetProductbyId(editid).subscribe(item =>{
        this._productInfo = item;
        this.productform.setValue({
          id: this._productInfo.id as number,
          name: this._productInfo.name as string,
          description: this._productInfo.description as string,
          price: this._productInfo.price as number,
          status: this._productInfo.status as boolean
        }
        )
      })

  }


  }

  productform = this.builder.group({
    id : this.builder.control({value:0,disabled: true}),
    name : this.builder.control('',Validators.required),
    description : this.builder.control('',Validators.required),
    price : this.builder.control( 0,Validators.required),
    status : this.builder.control(true)
  });

  ProceedSave(){
      if(this.productform.valid){
        // console.log(this.productform.value)
         let _data:Products={
          id: 0,//this.productform.value.id as number,
          name: this.productform.value.name as string,
          description: this.productform.value.description as string,
          price: this.productform.value.price as number,
          status: this.productform.value.status as true
        }
        if(this._dialogdata.id!=0){
          _data.id = this._dialogdata.id;
          this.service.UpdateProduct(_data).subscribe(item=>{
            this.toastr.success("Product Updated Successfully !","Success");
            // alert('Product Updated Successfully !');
          })

        }
        else{

              this.service.CreateProduct(_data).subscribe(item=>{
                this.toastr.success("Product Created Successfully !","Success");
              // alert('Product Created Successfully !');
               })
        }
        this.productform.reset();
        this.CancelPopup();
      }
  }

  CancelPopup(){
    this.ref.close();
  }

}
