import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
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
    MatFormFieldModule,
  ],
  declarations: [
    ContactsComponent,
  ],
  providers: [ContactsService]
})
export class ContactsModule {
}
