import {NgModule} from '@angular/core';

import {ODCkeditorComponent} from './od-ckeditor.component';
import {CKEditorModule} from 'ngx-ckeditor';
import {ODCommonModule} from '../od-common.module';

@NgModule({
  imports: [
    ODCommonModule,
    CKEditorModule
  ],
  declarations: [ODCkeditorComponent],
  exports: [ODCkeditorComponent],
  providers: [],
})
export class ODCkeditorModule {
}
