import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { ObservationListModule } from '../observation-list/observation-list.module';
import { ObservationAddModule } from '../observation-list/observation-add/observation-add.module';
import { DetailsModule } from '../details/details.module';

import { NavModule } from '../nav/nav.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    NavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,

    ObservationListModule,
    ObservationAddModule,
    DetailsModule

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
