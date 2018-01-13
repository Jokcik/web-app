import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditComponent} from './edit.component';
import {MainComponent} from './main/main.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {RegionComponent} from './region/region.component';
import {SchoolEditComponent} from './schools-edit/schools-edit.component';
import {ChildrenComponent} from './children/children.component';
import {CompetitionEditComponent} from './competition/competition-edit.component';
import {SchoolsComponent} from '../../schools/schools.component';
import {GalleryComponent} from '../../gallery/gallery.component';


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
          path: 'competition',
          component: CompetitionEditComponent,
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
          component: SchoolsComponent,
          data: {edit: true}
        },
        {
          path: 'gallery',
          component: GalleryComponent,
          data: {edit: true}
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
