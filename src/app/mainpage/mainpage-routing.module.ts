import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MainpageComponent} from './mainpage.component';
import {PageComponent} from './page/page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: MainpageComponent},
    {path: 'mainpage/:action', component: PageComponent},
  ])],
  exports: [RouterModule]
})
export class MainpageRoutingModule {
}
