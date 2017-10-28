import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {BankDataOdComponent} from './bank-data-od.component';
import {BankDataOdRoutingModule} from './bank-data-od-routing.module';

@NgModule({
  imports: [
    ODCommonModule,
    BankDataOdRoutingModule
  ],
  declarations: [
    BankDataOdComponent,
  ],
  providers: []
})
export class BankDataOdModule {
}
