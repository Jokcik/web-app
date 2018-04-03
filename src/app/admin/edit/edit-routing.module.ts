import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EditComponent} from './edit.component';
import {MainComponent} from './main/main.component';
import {NewsEditComponent} from './news-edit/news-edit.component';
import {RegionComponent} from './region/region.component';
import {ChildrenComponent} from './children/children.component';
import {SchoolsComponent} from '../../schools/schools.component';
import {GalleryComponent} from '../../gallery/gallery.component';
import {CompetitionComponent} from '../../competition/competition.component';
import {ChildrenEditPageComponent} from './children/edit-page-children/children-edit-page.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: EditComponent,
      children: [
        {path: '', component: NewsEditComponent},
        {path: 'children', loadChildren: 'app/admin/edit/children/children.module#ChildrenModule'},
        {path: 'competition', component: CompetitionComponent, data: {edit: true}},
        {path: 'history', component: MainComponent},
        {path: 'history/:url', component: MainComponent},
        {path: 'news', component: NewsEditComponent},
        {path: 'news/:url', component: NewsEditComponent},
        {path: 'regions', component: RegionComponent},
        {path: 'schools', component: SchoolsComponent, data: {edit: true}},
        {path: 'gallery', component: GalleryComponent, data: {edit: true}}
      ]
    }
  ])],
  exports: [RouterModule]
})
export class EditRoutingModule {
}
