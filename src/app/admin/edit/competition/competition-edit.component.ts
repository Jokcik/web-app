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

  public openDialog(isNew: boolean) {
    this.dialog.open(CompetitionsDialogAdd, {width: '900px', data: isNew ? '' : this.currentCompetition}).afterClosed().subscribe(result => {
      if (!result || !result.competition) return;

      if (!result.competition._id) {
        this.competitionService.save(result.competition).$observable.subscribe(() => {
          this.currentCompetition = null;
          this.updateCompetitions();
          this.snackBar.open('Конкурс успешно добавлен', 'ОК', {duration: 2000})
        });
      } else {
        this.competitionService.update(result.competition).$observable.subscribe(() => {
          this.currentCompetition = null;
          this.updateCompetitions();
          this.snackBar.open('Конкурс успешно изменен', 'ОК', {duration: 2000})
        });
      }
    });
  }

  public deleteCompetition() {
    this.competitionService.remove({_id: this.currentCompetition._id}).$observable.subscribe(() => {
      this.currentCompetition = null;
      this.updateCompetitions();
      this.snackBar.open('Конкурс успешно удален', 'ОК', {duration: 2000})
    });
  }
}
