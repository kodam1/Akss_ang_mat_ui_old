import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import { MatBadgeModule } from "@angular/material/badge";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatTable, MatColumnDef, MatHeaderRowDef } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
// import {MAT_DATE_LOCALE} from '@angular/material/core';
// import {provideNativeDateAdapter} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({

exports: [
          MatInputModule,
          MatSelectModule,
          MatAutocompleteModule,
          MatFormFieldModule,
          MatToolbarModule, MatButtonModule, MatIconModule,
          MatButtonModule,MatSidenavModule,MatMenuModule,
          MatBadgeModule,
          MatListModule,
          MatSidenavModule,
          MatCardModule,
          MatSliderModule,
          FormsModule,
          MatTableModule,

          MatPaginatorModule,
          MatSortModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatRadioModule,
          MatCheckboxModule,
          ReactiveFormsModule,
          MatDialogModule,
          MatGridListModule,
          MatDividerModule,
          MatTooltipModule,

]


})

export class MaterialModule{}
