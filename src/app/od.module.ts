import {NgModule} from '@angular/core';

import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ProfileComponent} from './profile/profile.component';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {CommonModule} from '@angular/common';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'web-app'}),
    ODCommonModule.forRoot(),
    CommonModule,
    ODRoutingModule,

    ResourceModule.forRoot(),

    HttpClientModule,
    MatIconModule,
    MatCardModule,

    MatMenuModule,
    MatButtonModule
  ],
  declarations: [
    ODComponent,
    ProfileComponent,
    Forbidden403Component,
    NotFound404Component,
  ],
  providers: [],
  bootstrap: [ODComponent]
})
export class ODModule {
}
