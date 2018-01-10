import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news-routing.module';
import {HistoryService} from '../history/history.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatIconModule} from '@angular/material';
import {PageComponent} from './page/page.component';

@NgModule({
  imports: [
    NewsRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,

    MatCardModule,
    MatIconModule
  ],
  declarations: [
    NewsComponent,
    PageComponent
  ],
  providers: [HistoryService]
})
export class NewsModule { }
