import { Component, OnInit } from '@angular/core';
import {CompetitionService} from './competition.service';
import {Competition} from '../admin/edit/shared/competition';
import {Dummy} from '../core/dummy';

@Component({
  selector: 'od-competition',
  templateUrl: './competition.component.html'
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition[] = Dummy.factory(Competition, 10);

  constructor(private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competitionService.query().$observable.subscribe(competitions => this.competitions = competitions);
  }

}
