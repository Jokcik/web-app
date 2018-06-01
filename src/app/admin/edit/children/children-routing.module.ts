import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChildrenComponent} from './children.component';
import {ChildrenEditPageComponent} from './edit-page-children/children-edit-page.component';

const routes: Routes = [
  {path: '', component: ChildrenComponent},
  {path: 'add', component: ChildrenEditPageComponent},
  {path: 'edit/:id', component: ChildrenEditPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrenRoutingModule {
}

export const routedComponents = [ChildrenComponent];
