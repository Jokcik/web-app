import {LOCALE_ID, NgModule} from '@angular/core';
import {ODComponent} from './od.component';
import {ODCommonModule} from './core/od-common.module';
import {ODRoutingModule} from './od-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ProfileComponent} from './profile/profile.component';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';

import localeRu from '@angular/common/locales/ru';
import {CWCounter} from './counter/counter.component';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
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

    CWCounter
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [ODComponent]
})
export class ODModule {
}
