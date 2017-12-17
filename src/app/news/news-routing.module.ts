import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewsComponent} from './news.component';
import {PageComponent} from './page/page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: NewsComponent,
    },
    {
      path: ':url',
      component: PageComponent
    },
  ])],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
