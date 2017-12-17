import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditComponent} from './edit.component';
import {MainComponent} from './main/main.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {RegionComponent} from './region/region.component';
import {DshiEditComponent} from './dshi-edit/dshi-edit.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: EditComponent,
      children: [
        {
          path: '',
          component: MainComponent,
        },
        {
          path: 'news',
          component: NewsEditComponent,
        },
        {
          path: 'regions',
          component: RegionComponent,
        },
        {
          path: 'schools',
          component: DshiEditComponent,
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
