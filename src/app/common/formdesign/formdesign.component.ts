import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { V } from '@angular/cdk/keycodes';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-formdesign',
  standalone: true,
  providers: [  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    provideNativeDateAdapter()],//
  imports: [MaterialModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formdesign.component.html',
  styleUrl: './formdesign.component.css'
})
export class FormdesignComponent implements OnInit {

  countrylist=["India","US","Singapore","UK"];
  termlist=["15days","30days","45days","60days"];

  // myControl = new FormControl('');
  // termlist=["15days","30days","45days","60days"];
  // filteredOptions: Observable<string[]> | undefined;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.termlist.filter(option => option.toLowerCase().includes(filterValue));
  // }

  constructor(private builder : FormBuilder){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.customerform.setValue({//+
      name: 'Nirihar Techees',//+
      email: 'nihiratech@gmail.com',//+
      phone: '87659876543',//+
      country: 'US',//+
      address: 'addr add2',//+
      term: '45days',//+
      dob: new Date(2024, 4, 15),//+
      gender: 'Male',//+
      status: false//+
    });//+

  }

  customerform = this.builder.group({
    name : this.builder.control('', Validators.required),
    email : this.builder.control('', Validators.required),
    // email : this.builder.control('', Validators.compose([Validators.required,Validators.required])),
    phone : this.builder.control('', Validators.required),
    country : this.builder.control('', Validators.required),
    address :  this.builder.control('',Validators.required),
    term : this.builder.control('', Validators.required),
    dob :  this.builder.control(new Date(2020,5,20)),
    gender :  this.builder.control('Female'),
    status : this.builder.control(false)
    })

    saveCustomer(){
      console.log(this.customerform.value);

    }

    clearForm(){
      this.customerform.reset();
    }

}
