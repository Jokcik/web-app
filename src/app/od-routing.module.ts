import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';

export const routes: Routes = [
  {path: '', loadChildren: 'app/news/news.module#NewsModule', pathMatch: 'full'},
  {path: 'history/:id', loadChildren: 'app/mainpage/mainpage.module#MainpageModule'},
  {path: 'address/:id', loadChildren: 'app/schools/schools.module#SchoolsModule'},
  {path: 'news', loadChildren: 'app/news/news.module#NewsModule'},
  {path: 'competition', loadChildren: 'app/competition/competition.module#CompetitionModule'},
  {path: 'bank-data-od', loadChildren: 'app/bank-data-od/bank-data-od.module#BankDataOdModule'},
  {path: 'galleries', loadChildren: 'app/gallery/gallery.module#GalleryModule'},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule'},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
  {path: 'admin/edit', loadChildren: 'app/admin/edit/edit.module#EditModule'},

  {path: '403-forbidden', component: Forbidden403Component},

  {path: '**', component: NotFound404Component},
];


@NgModule({                                 // TODO: Custom preloadingStrategy!
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ODRoutingModule {
}
