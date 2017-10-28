import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {MainpageComponent} from './mainpage.component';
import {MainpageRoutingModule} from './mainpage-routing.module';
import {CommonModule} from '@angular/common';
import {MainpageService} from './mainpage.service';
import {CKEditorModule} from 'ng2-ckeditor';
import { CarouselModule } from 'angular4-carousel';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ODCommonModule,
    CommonModule,
    MainpageRoutingModule,
    CKEditorModule,
    CarouselModule
  ],
  declarations: [
    MainpageComponent,
  ],
  providers: [MainpageService]
})
export class MainpageModule {
}
