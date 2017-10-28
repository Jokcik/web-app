import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BankDataOdComponent} from './bank-data-od.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BankDataOdComponent,
    }
  ])],
  exports: [RouterModule]
})
export class BankDataOdRoutingModule {
}
