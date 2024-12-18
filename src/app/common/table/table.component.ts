import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../Material.Module';
import { MasterService } from '../../services/master.service';
import { Customer } from '../../model/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  customerlist !: Customer[];
  // dataSource : any =  [
  //   {
  //     "code" : 1,
  //     "name" : "Test user",
  //     "phone" : "467889765",
  //     "email" : "test@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 2,
  //     "name" : "Monoj",
  //     "phone" : "098765432",
  //     "email" : "Monoj@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 3,
  //     "name" : "Jhon",
  //     "phone" : "1234567654",
  //     "email" : "Jhon@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 4,
  //     "name" : "Ben",
  //     "phone" : "849456654",
  //     "email" : "ben@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 5,
  //     "name" : "Kevin",
  //     "phone" : "9875789",
  //     "email" : "Monoj@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 6,
  //     "name" : "Tom",
  //     "phone" : "32434544",
  //     "email" : "tom@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 7,
  //     "name" : "Ben",
  //     "phone" : "849456654",
  //     "email" : "ben@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 8,
  //     "name" : "Kevin",
  //     "phone" : "9875789",
  //     "email" : "Monoj@in.com",
  //     "status" : "Active"
  //   },
  //   {
  //     "code" : 9,
  //     "name" : "Camp",
  //     "phone" : "9477853544",
  //     "email" : "Camp@in.com",
  //     "status" : "Active"
  //   }
  // ];

  dataSource : any;

  // console.log(JSON: any.stringify: any(dataSource));

  displayedColumns : string[]=["code","name","phone","email","status","action"];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !:MatPaginator;


  constructor( private service : MasterService, private dailog:MatDialog) {
    console.log(" before GetCustomer called from table component");
   // console.log(JSON.stringify(this.dataSource, null, "\t"));
    this.service.GetCustomer().subscribe(res=>{
      this.customerlist = res;
      console.log(" after GetCustomer called from table component");
      console.log(res);
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  FilterChange(data: Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;//value.trim().toLowerCase();
  }

  Openpopup(){
    this.dailog.open(PopupComponent,{
      width:'60%',
      data:{
        title: 'User edit'
      }
    });
  }

}
