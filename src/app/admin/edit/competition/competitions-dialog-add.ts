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
  public years: string[] = ['2017', '2018', '2019', '2020', '2021', '2022'];

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              private competitionService: CompetitionService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data ? data : this.currentCompetition;


    this.competitionService.queryLevels().$observable.subscribe(levels => {
      this.levels = levels;
      this.levelIdx = this.odUtils.getIdInArray(this.currentCompetition.level.title, levels, 'title');
    });
  }

  public add(): void {
    this.currentCompetition.level = <any>this.currentCompetition.level._id;
    this.dialogRef.close({competition: this.currentCompetition});
  }

}
