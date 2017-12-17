import {NgModule} from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {MainpageComponent} from './mainpage.component';
import {MainpageRoutingModule} from './mainpage-routing.module';
import {CommonModule} from '@angular/common';
import {MainpageService} from './mainpage.service';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {PageComponent} from '../news/page/page.component';

@NgModule({
  imports: [
    FormsModule,
    ODCommonModule,
    CommonModule,
    MainpageRoutingModule,
    RouterModule,

    CKEditorModule,
    MatCardModule
  ],
  declarations: [
    MainpageComponent,
  ],
  providers: [MainpageService]
})
export class MainpageModule {
}
