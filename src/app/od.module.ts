import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    ODCommonModule.forRoot(),
    ODRoutingModule,
    MatIconModule
  ],
  declarations: [
    ODComponent,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
