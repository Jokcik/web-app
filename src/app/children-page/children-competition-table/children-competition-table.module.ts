import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenCompetitionTableComponent} from './children-competition-table.component';
import {ODCommonModule} from '../../core/od-common.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ChildrenEditCompetitionDialogComponent} from './children-edit-competition-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,

    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,

    MatSelectModule
  ],
  declarations: [
    ChildrenEditCompetitionDialogComponent,
    ChildrenCompetitionTableComponent
  ],
  exports: [
    ChildrenEditCompetitionDialogComponent,
    ChildrenCompetitionTableComponent
  ],
  entryComponents: [ChildrenEditCompetitionDialogComponent]
})
export class ChildrenCompetitionTableModule { }
