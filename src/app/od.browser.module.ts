// angular
import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
// libs
import {TransferHttpCacheModule} from '@nguniversal/common';
import {REQUEST} from '@nguniversal/express-engine/tokens';
// shared
// components
import {ODComponent} from './od.component';
import {ODModule} from './od.module';
import {AppStorage} from '@shared/for-storage/universal.inject';
import {CookieStorage} from '@shared/for-storage/browser.storage';
import {ODCommonModule} from './core/od-common.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';

// import { ServiceWorkerModule } from '@angular/service-worker';

// the Request object only lives on the server
export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [ODComponent],
  imports: [
    ODModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    ODCommonModule.forRoot(),
    MatIconModule,
    MatCardModule,

    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST, useFactory: (getRequest)
    },
    { provide: AppStorage, useClass: CookieStorage },
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ]
})
export class OdBrowserModule {
}
