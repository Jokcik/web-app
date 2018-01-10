import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSortModule, MatTableModule,
  MatTabNav, MatTabsModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ODCommonModule} from '../../../core/od-common.module';
import {ChildrenComponent} from './children.component';
import {ChildrenDialogAdd} from './children-dialog-add';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ODCommonModule,
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    CdkTableModule,

    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  declarations: [
    ChildrenComponent,
    ChildrenDialogAdd
  ],
  entryComponents: [
    ChildrenDialogAdd
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
