import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';

export const routes: Routes = [
  {path: '', component: MainpageComponent, pathMatch: 'full'},
];


@NgModule({                                 // TODO: Custom preloadingStrategy!
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ODRoutingModule {
}
