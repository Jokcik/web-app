import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ODClickOutside} from './od-click-outside';
import {ProfileService} from '../profile/profile.service';
import {UserService} from './user-service/user.service';
import {ODUtils} from './od-utils';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ODClickOutside,
  ],
  exports: [
    RouterModule,
    ODClickOutside,
  ],
})
export class ODCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODCommonModule,
      providers: [
        ProfileService,
        UserService,
        ODUtils
      ]
    };
  }
}
