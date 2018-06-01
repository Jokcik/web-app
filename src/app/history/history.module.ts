import {NgModule} from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';
import {CommonModule} from '@angular/common';
import {EventService} from './event.service';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CKEditorModule} from 'ngx-ckeditor';

@NgModule({
  imports: [
    FormsModule,
    ODCommonModule,
    CommonModule,
    HistoryRoutingModule,
    RouterModule,

    CKEditorModule,
    MatCardModule
  ],
  declarations: [
    HistoryComponent,
  ],
  providers: [EventService]
})
export class HistoryModule {
}
