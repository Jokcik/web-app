import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainpageComponent} from './mainpage.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MainpageComponent,
    }
  ])],
  exports: [RouterModule]
})
export class MainpageRoutingModule {
}
