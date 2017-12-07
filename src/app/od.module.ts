import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {MatCardModule, MatIconModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    NoopAnimationsModule,
    ODCommonModule.forRoot(),
    ODRoutingModule,
    MatIconModule,
    MatCardModule,
  ],
  declarations: [
    ODComponent,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
