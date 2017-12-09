import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ODClickOutside} from './gg-click-outside';
import {ProfileService} from '../profile/profile.service';
import {UserService} from './user-service/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ODClickOutside
  ],
  exports: [
    RouterModule,
    ODClickOutside
  ],
})
export class ODCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODCommonModule,
      providers: [
        ProfileService,
        UserService
      ]
    };
  }
}
