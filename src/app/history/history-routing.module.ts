import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HistoryComponent} from './history.component';
import {PageComponent} from '../news/page/page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HistoryComponent},
  ])],
  exports: [RouterModule]
})
export class HistoryRoutingModule {
}
