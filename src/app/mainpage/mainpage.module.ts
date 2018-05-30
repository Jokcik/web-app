import {NgModule} from '@angular/core';

import {MainpageComponent} from './mainpage.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MainpageRoutingModule} from './mainpage-routing.module';
import {EventService} from '../history/event.service';
import {ODCommonModule} from '../core/od-common.module';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    FormsModule,
    MainpageRoutingModule
  ],
  declarations: [MainpageComponent],
  providers: [EventService],
})
export class MainpageModule {
}
