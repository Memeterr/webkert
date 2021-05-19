import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservationListComponent } from './observation-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ObservationListComponent
  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [ObservationListComponent]
})
export class ObservationListModule { }
