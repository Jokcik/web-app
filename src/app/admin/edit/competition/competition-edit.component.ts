import { Component, OnInit } from '@angular/core';
import {Competition} from '../shared/competition';
import {CompetitionService} from '../../../competition/competition.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DshiDialogAdd} from '../schools-edit/schools-dialog-add';
import {CompetitionsDialogAdd} from './competitions-dialog-add';

@Component({
  selector: 'od-competition-edit',
  templateUrl: './competition-edit.component.html',
})
export class CompetitionEditComponent implements OnInit {
  public competitions: Competition[] = [];
  public currentCompetition: Competition;

  constructor(private competitionService: CompetitionService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateCompetitions();
  }

  public updateCompetitions() {
    this.competitionService.query().$observable.subscribe(competitions => this.competitions = competitions);
  }

  public openDialog() {
    this.dialog.open(CompetitionsDialogAdd, {width: '900px', data: this.currentCompetition}).afterClosed().subscribe(result => {
      if (!result) return;
      this.competitionService.save(result.competition).$observable.subscribe(() => {
        this.currentCompetition = null;
        this.updateCompetitions();
        this.snackBar.open('Данные успешно сохранены', 'ОК', {duration: 2000})
      });
    });
  }
}
