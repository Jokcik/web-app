import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {CompetitionComponent} from './competition.component';
import {CompetitionRoutingModule} from './competition-routing.module';
import {CompetitionTableModule} from './competition-table/competition-table.module';
import {CompetitionService} from './competition.service';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    FormsModule,
    CompetitionRoutingModule,
    CompetitionTableModule,

    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    CompetitionComponent,
  ],
  providers: [CompetitionService]
})
export class CompetitionModule {
}
