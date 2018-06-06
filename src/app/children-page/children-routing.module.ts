import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ChildrenPageComponent} from './children-page.component';
import {ChildrenEntrantComponent} from './children-entrant/children-entrant.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ChildrenPageComponent},
    {path: 'entrant', component: ChildrenEntrantComponent}
  ])],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {
}
