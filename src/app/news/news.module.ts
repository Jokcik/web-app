import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news-routing.module';
import {MainpageService} from '../mainpage/mainpage.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {PageComponent} from './page/page.component';

@NgModule({
  imports: [
    NewsRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,

    MatCardModule
  ],
  declarations: [
    NewsComponent,
    PageComponent
  ],
  providers: [MainpageService]
})
export class NewsModule { }
