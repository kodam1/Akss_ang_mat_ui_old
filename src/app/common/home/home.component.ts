import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,CommonModule,ReversePipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Angular 18 Tutorials';
  subtitle = 'Nihira Techees ';
  todaydate = new Date();
  salary = 2848283;
  _obj = {'name':'Nihira'};

  isdisabled = false;
  _class = this.isdisabled;
  _color = 'yellow';
  _font = 45;

  _isShow=true;
  tickedlist =[
    {'id':1,'name':'angular','color':'green'},
    {'id':2,'name':'react','color':'blue'},
    {'id':3,'name':'vuejs','color':'orange'},
  ]

  _view='home1';

  ChangTitle(){
    this.title = 'Angular 18 Full Tutorials';
  }

  updatetitle(event:any){
    this.title = event.target.value;
  }
}
