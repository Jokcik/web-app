import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ChildrenPageComponent} from './children-page.component';
import {ChildrenRoutingModule} from './children-routing.module';
import {CommonModule} from '@angular/common';
import {ChildrenComponent} from '../admin/edit/children/children.component';
import {ChildrenModule} from '../admin/edit/children/children.module';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    ChildrenRoutingModule,
    ChildrenModule,
    MatSnackBarModule
  ],
  declarations: [
    ChildrenComponent,
  ],
  providers: []
})
export class ChildrenPageModule {
}
