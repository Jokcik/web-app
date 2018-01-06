import { Component, OnInit } from '@angular/core';
import {Competition} from '../shared/competition';
import {CompetitionService} from '../../../competition/competition.service';

@Component({
  selector: 'od-competition-edit',
  templateUrl: './competition-edit.component.html',
})
export class CompetitionEditComponent implements OnInit {
  public competitions: Competition[] = [];
  public currentCompetition: Competition;

  constructor(private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.updateCompetitions();
  }

  public updateCompetitions() {
    this.competitionService.query().$observable.subscribe(competitions => this.competitions = competitions);
  }

  public openDialog() {

  }
}
