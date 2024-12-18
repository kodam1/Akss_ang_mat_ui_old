import {AfterViewInit, Component, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
// import { DashboardComponent } from "../dashboard.component";
import { MatTable, MatColumnDef, MatHeaderRowDef } from '@angular/material/table';
import * as XLSX from 'xlsx';
import {MatButtonModule} from '@angular/material/button';
// import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import { MaterialModule } from '../../../Material.Module';

@Component({
  selector: 'app-view-clients',
  standalone: true,
  imports: [MaterialModule,MatTableModule, MatPaginatorModule,MatPaginator,MatTable,MatColumnDef,MatHeaderRowDef,MatButtonModule],
  templateUrl: './view-clients.component.html',
  styleUrl: './view-clients.component.css'
})
export class ViewClientsComponent implements AfterViewInit {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator)
  paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }


    exportToExcel() {
      // npm install xlsx
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(ELEMENT_DATA);
      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet1');

      XLSX.writeFile(workbook,'ViewRegistration.xlsx');
      }

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
  }

  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
