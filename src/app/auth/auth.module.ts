import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SchoolsService} from '../schools/schools.service';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    FormsModule,
    AuthRoutingModule,

    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  declarations: [
    AuthComponent,
  ],
  providers: [SchoolsService]
})
export class AuthModule {
}
