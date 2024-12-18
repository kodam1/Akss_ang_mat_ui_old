import {Component, OnInit,ChangeDetectionStrategy,computed,inject,signal} from '@angular/core';
// import {DashboardComponent } from "../dashboard.component";
import { FormsModule} from '@angular/forms';
import {JsonPipe,AsyncPipe } from '@angular/common';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MaterialModule } from '../../../Material.Module';

// import 'moment/locale/fr';
// import 'moment/locale/ja';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface DoctorList {
  id: number;
  name: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-client-registration',
  standalone: true,
  providers: [  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    provideNativeDateAdapter()],//
  // imports: [MatFormFieldModule, MatInputModule,MatDatepickerModule, MatSelectModule, MatGridListModule,
  //    MatButtonModule, MatDividerModule, MatIconModule,
  //   FormsModule,MatTooltipModule,JsonPipe,MatAutocompleteModule ,MaterialModule],
  imports: [ FormsModule,JsonPipe,MatAutocompleteModule ,MaterialModule],
  templateUrl: './client-registration.component.html',
  styleUrl: './client-registration.component.css'
})

export class ClientRegistrationComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  Drli : DoctorList[]  = [
    { id:1,name:'Administrative Computer'},
    { id:2,name:'Agosta Laboratory'},
    { id:3,name:'Allis Laboratory'},
    { id:4,name:'Bargaman Laboratory'},
    { id:5,name:'Bio-Imaging Resource Center'},
    { id:6,name:'Capital Projects'},
    { id:7,name:'Casanova Laboratory'},
    { id:8,name:'Darst Laboratory'},
    { id:9,name:'Darnell James Laboratory'},
    { id:10,name:'Deans Office'},
    { id:11,name:'Energy Consultant'},
    { id:12,name:'Electronic Shop'},
    { id:13,name:'Facilities Management'},
    { id:14,name:'Field Laboratory'}
  ];

  Client_Registration : any ={
    Date : '',
    Doctor : '',
    Chemist : '',
    Stockist : '',
    Area_Location : '',
    Note : ''
  }

  formValue : any;

  onSubmit(){
     debugger;
    this.formValue = this.Client_Registration;
  }

  resetForm(){
    this.Client_Registration = {
      Date : '',
      Doctor : '',
      Chemist : '',
      Stockist : '',
      Area_Location : '',
      Note : ''
    }
  }
}
