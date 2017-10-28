import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';

@NgModule({
  imports: [
    ContactsRoutingModule,
    ODCommonModule
  ],
  declarations: [
    ContactsComponent,
  ],
  providers: []
})
export class ContactsModule {
}
