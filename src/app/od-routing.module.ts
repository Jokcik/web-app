import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';

export const routes: Routes = [
  {path: '', loadChildren: 'app/mainpage/mainpage.module#MainpageModule', pathMatch: 'full'},
  {path: 'schools', loadChildren: 'app/schools/schools.module#SchoolsModule'},
  {path: 'news', loadChildren: 'app/news/news.module#NewsModule'},
  {path: 'competition', loadChildren: 'app/competition/competition.module#CompetitionModule'},
  {path: 'bank-data-od', loadChildren: 'app/bank-data-od/bank-data-od.module#BankDataOdModule'},
  {path: 'gallery', loadChildren: 'app/gallery/gallery.module#GalleryModule'},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule'},
]; 


@NgModule({                                 // TODO: Custom preloadingStrategy!
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ODRoutingModule {
}
