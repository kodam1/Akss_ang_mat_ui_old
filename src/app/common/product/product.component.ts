import { Component, OnInit, ViewChild ,AfterViewInit,ElementRef} from '@angular/core';
import {  Products } from '../../model/Productmodel';
import { ProductService } from '../../services/product.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatCardModule,MatInputModule,MatButtonModule,CommonModule,MatDialogModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price','status', 'action'];
  dataSource!: MatTableDataSource<Products>;
  //  dataSource = new MatTableDataSource<Products>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public service: ProductService, private dialog : MatDialog ){

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.LoadProducts();
  }

  ProductList : Products[]=[];

  LoadProducts(){
    this.service.GetAll().subscribe(item=>{
        this.ProductList = item;
        this.dataSource = new MatTableDataSource(this.ProductList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(' i m in GetAll');
        // console.log(item);
    })
  }

  Createproduct() : void{
    this.Openpopup(0, 'Create Product');
  }

  Openpopup(id : number = 0, title : string ){

      this.dialog.open(AddproductComponent,{
        width:'40%',
        enterAnimationDuration:'1000ms',
        exitAnimationDuration:'1000ms',
        data:{id:id, title:title}
      }).afterClosed().subscribe(item=>{
        this.LoadProducts();
      })

  }

  EditProduct(id:number){
    this.Openpopup(id, 'Edit Product');
  }

  DeleteProduct(id:number){
    console.log("DeleteProduct id :"+id)
    if(confirm('Are you sure you want to delete this product?')){
        this.service.Removeproduct(id).subscribe(item =>{
            alert("Product deleted !");
            this.LoadProducts();
        })
    }

    // this.Openpopup(id, 'Delete Product');
  }

  // displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //  export interface PeriodicElement {
  //   name: string;
  //   position: number;
  //   weight: number;
  //   symbol: string;
  // }

  // const ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  //   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  //   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  //   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  //   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  //   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  //   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  //   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  //   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  //   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  //   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  // ];

  //  function exportToExcel() {
  //   // npm install xlsx
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ELEMENT_DATA);
  //   const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');

  //   XLSX.writeFile(workbook,'ProductList.xlsx');
  //   }

    // npm install jspdf --save
    // npm install @types/jspdf --save-dev

    // @ViewChild('content') htmlData!: ElementRef;
    // public SavePDF(): void {
    //   let content = this.con //.nativeElement;
    //   let doc = new jsPDF();
    //   let _elementHandlers =
    //   {
    //     '#editor':function(element,renderer){
    //       return true;
    //     }
    //   };
    //   doc.fromHTML(content.innerHTML,15,15,{

    //     'width':190,
    //     'elementHandlers':_elementHandlers
    //   });

    //   doc.save('test.pdf');
    // }

    exportToExcel() {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.ProductList);
        const workbook: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');
        XLSX.writeFile(workbook,'ProductList.xlsx');
    }

}
