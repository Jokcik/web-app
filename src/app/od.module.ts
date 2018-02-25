import {NgModule, Injector, LOCALE_ID} from '@angular/core';
import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ProfileComponent} from './profile/profile.component';
import {AnnounceComponent} from './announce/announce.component';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {CommonModule} from '@angular/common';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {HistoryService} from './history/history.service';
import {HttpClientModule} from '@angular/common/http';
import {ServiceLocator} from './core/service-locator';

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'web-app'}),
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
    Forbidden403Component,
    NotFound404Component,
  ],
  providers: [HistoryService, { provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [ODComponent]
})
export class ODModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
