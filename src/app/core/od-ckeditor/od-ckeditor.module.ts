import {NgModule} from '@angular/core';

import {ODCkeditorComponent} from './od-ckeditor.component';
import {CKEditorModule} from 'ngx-ckeditor';

@NgModule({
  imports: [CKEditorModule],
  declarations: [ODCkeditorComponent],
  exports: [ODCkeditorComponent],
  providers: [],
})
export class ODCkeditorModule {
}
