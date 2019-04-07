import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionRoutingModule} from './question-routing.module';
import {QuestionComponent} from './question.component';
import { QuestionStartComponent } from './question-start/question-start.component';
import { QuestionGoComponent } from './question-go/question-go.component';
import { QuestionEndComponent } from './question-end/question-end.component';
import {ODCommonModule} from '../core/od-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatRadioModule} from '@angular/material';
import {ContactsService} from '../contacts/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionRoutingModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [
    QuestionComponent,
    QuestionStartComponent,
    QuestionGoComponent,
    QuestionEndComponent
  ],
  providers: [
    ContactsService
  ]
})
export class QuestionModule {
}
