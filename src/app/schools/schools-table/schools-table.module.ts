import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSortModule
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CommonModule} from '@angular/common';
import {ODCommonModule} from '../../core/od-common.module';
import {NgModule} from '@angular/core';
import {SchoolsTableComponent} from './schools-table.component';
import {SchoolsDialogAdd} from './schools-dialog-add';
import {RegionService} from '../../admin/edit/region/region.service';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    FormsModule,

    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [
    SchoolsTableComponent,
    SchoolsDialogAdd,
  ],
  entryComponents: [
    SchoolsDialogAdd,
  ],
  exports: [
    SchoolsTableComponent
  ],
  providers: [RegionService]
})
export class SchoolsTableModule {

}
