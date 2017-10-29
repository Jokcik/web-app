import { NgModule } from '@angular/core';
import {EditRoutingModule} from './edit-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ODCommonModule} from '../../core/od-common.module';
import {EditComponent} from './edit.component';
import {MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    FormsModule,
    EditRoutingModule,

    MatTabsModule
  ],
  declarations: [
    EditComponent,
  ],
  providers: []
})
export class EditModule {
}
