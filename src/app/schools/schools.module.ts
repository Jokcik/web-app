import { NgModule } from '@angular/core';
import {SchoolsRoutingModule} from './schools-routing.module';
import {ODCommonModule} from '../core/od-common.module';
import {SchoolsComponent} from './schools.component';

@NgModule({
  imports: [
    SchoolsRoutingModule,
    ODCommonModule
  ],
  declarations: [
    SchoolsComponent,
  ],
  providers: []
})
export class SchoolsModule { }
