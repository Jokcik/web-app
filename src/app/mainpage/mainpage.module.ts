import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {MainpageComponent} from './mainpage.component';
import {MainpageRoutingModule} from './mainpage-routing.module';
// import {MainpageService} from './mainpage.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainpageService} from './mainpage.service';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ODCommonModule,
    CommonModule,
    MainpageRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    MainpageComponent,
  ],
  providers: [MainpageService]
})
export class MainpageModule {
}
