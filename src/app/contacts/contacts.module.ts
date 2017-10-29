import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule,
    ODCommonModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    ContactsComponent,
  ],
  providers: []
})
export class ContactsModule {
}
