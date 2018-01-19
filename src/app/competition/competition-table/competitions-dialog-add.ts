import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChildrenPageService} from '../../children-page/children-page.service';
import {CompetitionService} from '../competition.service';
import {Component, Inject} from '@angular/core';
import {Specialization} from '../../admin/edit/shared/children';
import {CompetitionLevel} from '../../admin/edit/shared/competition-level';
import {Competition, CompetitionFiles} from '../../admin/edit/shared/competition';
import {ODUtils} from '../../core/od-utils';

@Component({
  selector: 'competition-dialog-add',
  templateUrl: 'competitions-dialog-add.html',
})
export class CompetitionsDialogAdd {
  public currentCompetition: Competition = new Competition();
  public isEditDialog: boolean = false;

  public specializations: Specialization[] = [];
  public specializationIdx: number = -1;

  public levels: CompetitionLevel[] = [];
  public levelIdx: number = -1;

  public selectYear: number = 2018;

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              private competitionService: CompetitionService,
              private childrenService: ChildrenPageService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data.competition ? data.competition : this.currentCompetition;
    this.isEditDialog = data.edit || this.isEditDialog;

    this.competitionService.queryLevels().$observable.subscribe(levels => {
      this.levels = levels;
      this.levelIdx = this.odUtils.getIdInArray(this.currentCompetition.level.title, levels, 'title');
    });

    this.childrenService.querySpecializations().$observable.subscribe(speicializations => {
      this.specializations = speicializations;

      if (!this.currentCompetition.specialization) return;
      this.specializationIdx = this.odUtils.getIdInArray(this.currentCompetition.specialization.title, this.specializations, 'title');
    });

    this.currentCompetition.files = this.currentCompetition.files || {};
  }


  public add(): void {
    this.currentCompetition.level = <any>this.currentCompetition.level._id;
    if (this.specializationIdx != -1) {
      this.currentCompetition.specialization = <any>this.specializations[this.specializationIdx]._id;
    } else {
      this.currentCompetition.specialization = <any>'';
    }
    this.dialogRef.close({competition: this.currentCompetition, type: 'add'});
  }

  public deleteCompetition() {
    if (!window.confirm('Вы действительно хотите удалить этот конкурс?')) return;
    this.dialogRef.close({competition: this.currentCompetition, type: 'remove'});
  }
}
