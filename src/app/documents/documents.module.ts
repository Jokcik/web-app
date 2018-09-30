import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsComponent} from './documents.component';
import {ODCommonModule} from '../core/od-common.module';
import {DocumentsRoutingModule} from './documents-routing.module';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DocumentsService} from './documents.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    DocumentsRoutingModule,
    FormsModule,

    MatExpansionModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    DocumentsComponent
  ],
  providers: [
    DocumentsService
  ]
})
export class DocumentsModule {
}
