import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainpageComponent} from './mainpage.component';
import {PageComponent} from '../news/page/page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: MainpageComponent},
  ])],
  exports: [RouterModule]
})
export class MainpageRoutingModule {
}
