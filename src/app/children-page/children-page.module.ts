import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ChildrenPageComponent} from './children-page.component';
import {ChildrenRoutingModule} from './children-routing.module';
import {CommonModule} from '@angular/common';
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
    ChildrenPageComponent,
  ],
  providers: []
})
export class ChildrenPageModule {
}
