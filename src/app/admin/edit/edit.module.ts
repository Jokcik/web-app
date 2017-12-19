import {NgModule} from '@angular/core';
import {EditRoutingModule} from './edit-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ODCommonModule} from '../../core/od-common.module';
import {EditComponent} from './edit.component';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCardModule, MatDialogModule, MatDialogRef,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatTabNav,
  MatTabsModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MainpageService} from '../../mainpage/mainpage.service';
import {CKEditorModule} from 'ng2-ckeditor';
import {MainComponent} from './main/main.component';
import {RegionComponent} from './region/region.component';
import {RegionService} from './region/region.service';
import {HttpModule} from '@angular/http';
import {RegionDialogAdd} from './region/region-dialog-add';
import {DshiEditComponent} from './dshi-edit/dshi-edit.component';
import {DshiEditService} from './dshi-edit/dshi-edit.service';
import {DshiDialogAdd} from './dshi-edit/dshi-dialog-add';
import { NewsEditComponent } from './news-edit/news-edit.component';
import {ODMultipartSendService} from '../../core/od-multipart-send.service';
import {ODUtils} from '../../core/od-utils';
import {ODImageDirective} from '../../core/od-image-load.directive';

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
    MatGridListModule
  ],
  declarations: [
    EditComponent,
    MainComponent,
    RegionComponent,
    RegionDialogAdd,
    DshiEditComponent,
    DshiDialogAdd,
    NewsEditComponent,
  ],
  entryComponents: [
    RegionDialogAdd,
    DshiDialogAdd
  ],
  providers: [MainpageService, RegionService, DshiEditService, ODMultipartSendService, MatTabNav,
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}}
  ]
})
export class EditModule {
}
