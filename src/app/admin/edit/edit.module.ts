import {NgModule} from '@angular/core';
import {EditRoutingModule} from './edit-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
  MatSortModule, MatTableModule, MatTabNav, MatTabsModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CKEditorModule} from 'ng2-ckeditor';
import {ODCommonModule} from '../../core/od-common.module';
import {EditComponent} from './edit.component';
import {MainpageService} from '../../mainpage/mainpage.service';
import {MainComponent} from './main/main.component';
import {RegionComponent} from './region/region.component';
import {RegionService} from './region/region.service';
import {RegionDialogAdd} from './region/region-dialog-add';
import {SchoolEditComponent} from './schools-edit/schools-edit.component';
import {SchoolsService} from '../../schools/schools.service';
import {DshiDialogAdd} from './schools-edit/schools-dialog-add';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {ODMultipartSendService} from '../../core/od-multipart-send.service';
import {ChildrenService} from '../../bank-data-od/children.service';
import {ChildrenModule} from './children/children.module';
import {CompetitionEditComponent} from './competition/competition-edit.component';
import {CompetitionService} from '../../competition/competition.service';
import {CompetitionsDialogAdd} from './competition/competitions-dialog-add';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ODCommonModule,
    CommonModule,
    FormsModule,
    EditRoutingModule,
    CKEditorModule,
    ChildrenModule,

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
    MatSnackBarModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  declarations: [
    EditComponent,
    MainComponent,
    RegionComponent,
    RegionDialogAdd,
    SchoolEditComponent,
    DshiDialogAdd,
    NewsEditComponent,
    CompetitionEditComponent,
    CompetitionsDialogAdd
  ],
  entryComponents: [
    RegionDialogAdd,
    DshiDialogAdd,
    CompetitionsDialogAdd
  ],
  providers: [MainpageService, RegionService, SchoolsService, ODMultipartSendService, MatTabNav, ChildrenService, CompetitionService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ]
})
export class EditModule {
}
