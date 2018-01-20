import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ContactsService} from './contacts.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule,
    ODCommonModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],
  declarations: [
    ContactsComponent,
  ],
  providers: [ContactsService]
})
export class ContactsModule {
}
