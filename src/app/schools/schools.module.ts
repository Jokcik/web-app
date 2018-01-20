import { NgModule } from '@angular/core';
import {SchoolsRoutingModule} from './schools-routing.module';
import {ODCommonModule} from '../core/od-common.module';
import {SchoolsComponent} from './schools.component';
import {MatCardModule, MatFormFieldModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import {SchoolsService} from './schools.service';
import {RegionService} from '../admin/edit/region/region.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { SchoolsTableComponent } from './schools-table/schools-table.component';
import {SchoolsTableModule} from './schools-table/schools-table.module';

@NgModule({
  imports: [
    SchoolsRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,
    SchoolsTableModule,

    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  declarations: [
    SchoolsComponent,
  ],
  exports: [
    SchoolsComponent
  ],
  providers: [SchoolsService, RegionService]
})
export class SchoolsModule { }
