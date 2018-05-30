import {NgModule} from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news-routing.module';
import {EventService} from '../history/event.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatIconModule} from '@angular/material';
import {PageComponent} from './page/page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {RouterModule} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    NewsRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,
    RouterModule,
    InfiniteScrollModule,

    MatCardModule,
    MatIconModule,
    NgxGalleryModule
  ],
  declarations: [
    NewsComponent,
    PageComponent,
  ],
  providers: [EventService]
})
export class NewsModule { }
