import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OdClickOutsideDirective} from './od-click-outside.directive';
import {ProfileService} from '../profile/profile.service';
import {UserService} from './user-service/user.service';
import {ODUtils} from './od-utils';
import {ODImageDirective} from './od-image-load.directive';
import {ODDatePipe} from './od-date/od-date.pipe';
import {UpdateService} from '../announce/update.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    OdClickOutsideDirective,
    ODImageDirective,
    ODDatePipe
  ],
  exports: [
    OdClickOutsideDirective,
    ODImageDirective,
    ODDatePipe
  ],
})
export class ODCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODCommonModule,
      providers: [
        ProfileService,
        UserService,
        ODUtils,
        UpdateService
      ]
    };
  }
}
