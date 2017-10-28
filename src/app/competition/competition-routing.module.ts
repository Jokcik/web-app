import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CompetitionComponent} from './competition.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CompetitionComponent,
    }
  ])],
  exports: [RouterModule]
})
export class CompetitionRoutingModule {
}
