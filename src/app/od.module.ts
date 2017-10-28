import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ODCommonModule.forRoot(),
    ODRoutingModule,
  ],
  declarations: [
    ODComponent,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
