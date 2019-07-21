import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';

import { GridsRoutingModule } from './grids-routing.module';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    GridsRoutingModule,
    AgGridModule.withComponents([]),
    MatCardModule,
    MatButtonModule
  ]
})
export class GridsModule { }
