import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ODClickOutside} from './od-click-outside';
import {ProfileService} from '../profile/profile.service';
import {UserService} from './user-service/user.service';
import {ODUtils} from './od-utils';
import {ODImageDirective} from './od-image-load.directive';
import {ODDatePipe} from './od-date/od-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ODClickOutside,
    ODImageDirective,
    ODDatePipe
  ],
  exports: [
    ODClickOutside,
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
        ODUtils
      ]
    };
  }
}
