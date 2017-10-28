import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {CompetitionComponent} from './competition.component';
import {CompetitionRoutingModule} from './competition-routing.module';

@NgModule({
  imports: [
    ODCommonModule,
    CompetitionRoutingModule
  ],
  declarations: [
    CompetitionComponent,
  ],
  providers: []
})
export class CompetitionModule {
}
