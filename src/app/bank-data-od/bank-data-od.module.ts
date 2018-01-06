import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {BankDataOdComponent} from './bank-data-od.component';
import {BankDataOdRoutingModule} from './bank-data-od-routing.module';
import {CommonModule} from '@angular/common';
import {ChildrenComponent} from '../admin/edit/children/children.component';
import {ChildrenModule} from '../admin/edit/children/children.module';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    BankDataOdRoutingModule,
    ChildrenModule,
    MatSnackBarModule
  ],
  declarations: [
    BankDataOdComponent,
  ],
  providers: []
})
export class BankDataOdModule {
}
