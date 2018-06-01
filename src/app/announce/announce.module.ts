import {NgModule} from '@angular/core';

import {AnnounceComponent} from './announce.component';
import {CommonModule} from '@angular/common';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ODCommonModule} from '../core/od-common.module';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {AnnounceRoutingModule} from './announce-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ODCommonModule,
    FormsModule,
    AnnounceRoutingModule,

    MatIconModule,
  ],
  exports: [],
  declarations: [AnnounceComponent],
  providers: [],
})
export class AnnounceModule {
}
