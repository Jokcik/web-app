import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule} from '@angular/material';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ODCommonModule.forRoot(),
    ODRoutingModule,
    MatIconModule
  ],
  declarations: [
    ODComponent,
    AuthComponent,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
