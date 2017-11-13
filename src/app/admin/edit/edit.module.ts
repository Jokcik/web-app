import { NgModule } from '@angular/core';
import {EditRoutingModule} from './edit-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ODCommonModule} from '../../core/od-common.module';
import {EditComponent} from './edit.component';
import {MatButtonModule, MatCardModule, MatTabsModule} from '@angular/material';
import {MainpageService} from '../../mainpage/mainpage.service';
import {CKEditorModule} from 'ng2-ckeditor';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    FormsModule,
    EditRoutingModule,
    CKEditorModule,

    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    EditComponent,
  ],
  providers: [MainpageService]
})
export class EditModule {
}
