import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {NewsComponent} from './news.component';
import {NewsRoutingModule} from './news-routing.module';

@NgModule({
  imports: [
    NewsRoutingModule,
    ODCommonModule
  ],
  declarations: [
    NewsComponent,
  ],
  providers: []
})
export class NewsModule { }
