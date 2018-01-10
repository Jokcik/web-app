import {NgModule} from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';
import {CommonModule} from '@angular/common';
import {HistoryService} from './history.service';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {PageComponent} from '../news/page/page.component';

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
  providers: [HistoryService]
})
export class HistoryModule {
}
