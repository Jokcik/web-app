import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogRef,
  MatInputModule,
  MatNativeDateModule, MatPaginatorModule,
  MatSelectModule, MatSortModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ODCommonModule} from '../../../core/od-common.module';
import {ChildrenComponent} from './children.component';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {ChildrenCompetitionTableModule} from '../../../children-page/children-competition-table/children-competition-table.module';
import {ChildrenEditPageComponent} from './edit-page-children/children-edit-page.component';
import {ChildrenRoutingModule} from './children-routing.module';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ChildrenRoutingModule,
    ReactiveFormsModule,
    ODCommonModule,
    CommonModule,
    FormsModule,
    ChildrenCompetitionTableModule,

    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,

    CdkTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [
    ChildrenComponent,
    ChildrenEditPageComponent,
  ],
  exports: [
    ChildrenComponent,
  ],
  providers: [ChildrenPageService, RegionService, SchoolsService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ]
})
export class ChildrenModule {
}
