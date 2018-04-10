import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenCompetitionTableComponent} from './children-competition-table.component';
import {ODCommonModule} from '../../core/od-common.module';
import {
  MatAutocompleteModule,
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
import {ReactiveFormsModule} from '@angular/forms';
import {TeacherService} from '../../admin/edit/teacher/teacher.service';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    ReactiveFormsModule,

    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,

    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [TeacherService],
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
