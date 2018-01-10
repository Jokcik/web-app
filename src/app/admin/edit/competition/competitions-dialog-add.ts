import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Competition} from '../shared/competition';
import {CompetitionLevel} from '../shared/competition-level';
import {CompetitionPlace} from '../shared/competition-place';
import {CompetitionService} from '../../../competition/competition.service';
import {ODUtils} from '../../../core/od-utils';
import {Specialization} from '../shared/children';
import {ChildrenPageService} from '../../../children-page/children-page.service';

@Component({
  selector: 'competition-dialog-add',
  templateUrl: 'competitions-dialog-add.html',
})
export class CompetitionsDialogAdd {
  public currentCompetition: Competition = new Competition();

  public specializations: Specialization[] = [];
  public specializationIdx: number = -1;

  public levels: CompetitionLevel[] = [];
  public levelIdx: number = -1;

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              private competitionService: CompetitionService,
              private childrenService: ChildrenPageService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data ? data : this.currentCompetition;

    this.competitionService.queryLevels().$observable.subscribe(levels => {
      this.levels = levels;
      this.levelIdx = this.odUtils.getIdInArray(this.currentCompetition.level.title, levels, 'title');
    });

    this.childrenService.querySpecializations().$observable.subscribe(speicializations => {
      this.specializations = speicializations;

      if (!this.currentCompetition.specialization) return;
      this.specializationIdx = this.odUtils.getIdInArray(this.currentCompetition.specialization.title, this.specializations, 'title');
    });
  }

  public add(): void {
    this.currentCompetition.level = <any>this.currentCompetition.level._id;
    if (this.specializationIdx != -1) {
      this.currentCompetition.specialization = <any>this.specializations[this.specializationIdx]._id;
    } else {
      this.currentCompetition.specialization = <any>'';
    }
    this.dialogRef.close({competition: this.currentCompetition});
  }

}
