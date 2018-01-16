import {NgModule} from '@angular/core';
import {EditRoutingModule} from './edit-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabNav,
  MatTabsModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ODCommonModule} from '../../core/od-common.module';
import {EditComponent} from './edit.component';
import {HistoryService} from '../../history/history.service';
import {MainComponent} from './main/main.component';
import {RegionComponent} from './region/region.component';
import {RegionService} from './region/region.service';
import {RegionDialogAdd} from './region/region-dialog-add';
import {SchoolEditComponent} from './schools-edit/schools-edit.component';
import {SchoolsService} from '../../schools/schools.service';
import {DshiDialogAdd} from './schools-edit/schools-dialog-add';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {ODMultipartSendService} from '../../core/od-multipart-send.service';
import {ChildrenPageService} from '../../children-page/children-page.service';
import {ChildrenModule} from './children/children.module';
import {CompetitionEditComponent} from './competition/competition-edit.component';
import {CompetitionService} from '../../competition/competition.service';
import {CompetitionTableModule} from '../../competition/competition-table/competition-table.module';
import {SchoolsModule} from '../../schools/schools.module';
import {GalleryModule} from '../../gallery/gallery.module';
import {CompetitionModule} from '../../competition/competition.module';
import {ODCkeditorModule} from '../../core/od-ckeditor/od-ckeditor.module';

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
    ODCkeditorModule,
    ChildrenModule,
    CompetitionTableModule,
    SchoolsModule,
    GalleryModule,
    CompetitionModule,

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
  ],
  entryComponents: [
    RegionDialogAdd,
    DshiDialogAdd,
  ],
  providers: [HistoryService, RegionService, SchoolsService, ODMultipartSendService, MatTabNav, ChildrenPageService, CompetitionService,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ]
})
export class EditModule {
}
