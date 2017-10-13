import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ODCommonModule} from './core/od-common.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import {ODRoutingModule} from './od-routing.module';
import { SchoolsComponent } from './schools/schools.component';

@NgModule({
  imports: [
    BrowserModule,
    ODCommonModule.forRoot(),
    ODRoutingModule
  ],
  declarations: [
    AppComponent,
    MainpageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
