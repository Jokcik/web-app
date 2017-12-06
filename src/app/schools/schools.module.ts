import { NgModule } from '@angular/core';
import {SchoolsRoutingModule} from './schools-routing.module';
import {ODCommonModule} from '../core/od-common.module';
import {SchoolsComponent} from './schools.component';
import {MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {DshiEditService} from '../admin/edit/dshi-edit/dshi-edit.service';
import {RegionService} from '../admin/edit/region/region.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    SchoolsRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,

    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  declarations: [
    SchoolsComponent,
  ],
  providers: [DshiEditService, RegionService]
})
export class SchoolsModule { }
