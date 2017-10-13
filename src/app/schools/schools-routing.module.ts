import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SchoolsComponent} from './schools.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: SchoolsComponent,
    }
  ])],
  exports: [RouterModule]
})
export class SchoolsRoutingModule {
}
