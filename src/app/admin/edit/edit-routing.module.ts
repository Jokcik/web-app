import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditComponent} from './edit.component';
import {MainComponent} from './main/main.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {RegionComponent} from './region/region.component';
import {SchoolEditComponent} from './schools-edit/schools-edit.component';
import {ChildrenComponent} from './children/children.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: EditComponent,
      children: [
        {
          path: '',
          component: NewsEditComponent,
        },
        {
          path: 'children',
          component: ChildrenComponent,
        },
        {
          path: 'history',
          component: MainComponent,
        },
        {
          path: 'news',
          component: NewsEditComponent,
        },
        {
          path: 'news/:url',
          component: NewsEditComponent,
        },
        {
          path: 'regions',
          component: RegionComponent,
        },
        {
          path: 'schools',
          component: SchoolEditComponent,
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
