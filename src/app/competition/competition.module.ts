import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {CompetitionComponent} from './competition.component';
import {CompetitionRoutingModule} from './competition-routing.module';
import {CompetitionTableModule} from './competition-table/competition-table.module';
import {CompetitionService} from './competition.service';

@NgModule({
  imports: [
    ODCommonModule,
    CompetitionRoutingModule,
    CompetitionTableModule
  ],
  declarations: [
    CompetitionComponent,
  ],
  providers: [CompetitionService]
})
export class CompetitionModule {
}
