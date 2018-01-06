import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Competition} from '../shared/competition';
import {CompetitionLevel} from '../shared/competition-level';
import {CompetitionPlace} from '../shared/competition-place';
import {CompetitionService} from '../../../competition/competition.service';
import {ODUtils} from '../../../core/od-utils';

@Component({
  selector: 'competition-dialog-add',
  templateUrl: 'competitions-dialog-add.html',
})
export class CompetitionsDialogAdd {
  public currentCompetition: Competition = new Competition();

  public levels: CompetitionLevel[] = [];
  public levelIdx: number = -1;
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              private competitionService: CompetitionService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.currentCompetition = data;

      let date = new Date(this.currentCompetition.date);
      this.year = date.getFullYear();
      this.month = date.getMonth();
    }


    this.competitionService.queryLevels().$observable.subscribe(levels => {
      this.levels = levels;
      this.levelIdx = this.odUtils.getIdInArray(this.currentCompetition.level.title, levels, 'title');
    });
  }

  public add(): void {
    this.currentCompetition.level = <any>this.currentCompetition.level._id;
    this.currentCompetition.date = new Date(this.year, this.month);
    this.dialogRef.close({competition: this.currentCompetition});
  }

}
