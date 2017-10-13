import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';

export const routes: Routes = [
  {path: '', component: MainpageComponent, pathMatch: 'full'},
  {path: 'schools', loadChildren: 'app/schools/schools.module#SchoolsModule'},
  {path: 'news', loadChildren: 'app/news/news.module#NewsModule'}

];


@NgModule({                                 // TODO: Custom preloadingStrategy!
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ODRoutingModule {
}
