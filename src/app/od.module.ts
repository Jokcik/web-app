import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ProfileComponent} from './profile/profile.component';
import {AnnounceComponent} from './announce/announce.component';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {CommonModule} from '@angular/common';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';

@NgModule({
  imports: [
    HttpModule,
    NoopAnimationsModule,
    ODCommonModule.forRoot(),
    CommonModule,
    ODRoutingModule,
    MatIconModule,
    MatCardModule,

    MatMenuModule,
    MatButtonModule
  ],
  declarations: [
    ODComponent,
    ProfileComponent,
    AnnounceComponent,
    Forbidden403Component,
    NotFound404Component,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
