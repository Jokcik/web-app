import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {MainpageComponent} from './mainpage.component';
import {MainpageRoutingModule} from './mainpage-routing.module';
// import {MainpageService} from './mainpage.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainpageService} from './mainpage.service';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    MainpageRoutingModule,
  ],
  declarations: [
    MainpageComponent,
  ],
  providers: [MainpageService]
})
export class MainpageModule {
}
