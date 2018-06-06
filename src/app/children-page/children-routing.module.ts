import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChildrenPageComponent} from './children-page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ChildrenPageComponent}
  ])],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {
}
