import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { InputComponent } from "../input/input.component";
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MaterialModule,InputComponent],
  // imports: [MaterialModule, InputComponent,MatDialogRef,Inject],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  inputdata : any;

  // constructor( @Inject[MAT_DIALOG_DATA] public data : any ,private ref : MatDialogRef<PopupComponent>){

  // }

  ngOnInit(): void {
    // this.inputdata = this.data;
  }

  closepopup(){
      // this.ref.close();
  }



}
