import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Forbidden403Component} from './exceptions/403-forbidden/403-forbidden.component';
import {NotFound404Component} from './exceptions/404-not-found/404-not-found.component';

export const routes: Routes = [
  {path: '', loadChildren: 'app/mainpage/mainpage.module#MainpageModule', pathMatch: 'full', data: {title: 'Одаренные дети Белгородской области'}},
  {path: 'history/:id', loadChildren: 'app/history/history.module#HistoryModule', data: {title: 'История'}},
  {path: 'address/:id', loadChildren: 'app/schools/schools.module#SchoolsModule', data: {title: 'Адреса'}},
  {path: 'news', loadChildren: 'app/news/news.module#NewsModule', data: {title: 'Новости'}},
  {path: 'announce', loadChildren: 'app/announce/announce.module#AnnounceModule', data: {title: 'Анонсы'}},
  {path: 'competition', loadChildren: 'app/competition/competition.module#CompetitionModule', data: {title: 'Конкурсы'}},
  {path: 'children', loadChildren: 'app/children-page/children-page.module#ChildrenPageModule', data: {title: 'Одаренные дети'}},
  {path: 'galleries', loadChildren: 'app/gallery/gallery.module#GalleryModule', data: {title: 'Галерея'}},
  {path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule', data: {title: 'Контакты'}},
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule', data: {title: 'Авторизация'}},
  {path: 'admin/edit', loadChildren: 'app/admin/edit/edit.module#EditModule', data: {title: 'Администрирование'}},

  {path: '403-forbidden', component: Forbidden403Component},

  {path: '**', component: NotFound404Component},
];


@NgModule({                                 // TODO: Custom preloadingStrategy!
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ODRoutingModule {
}
