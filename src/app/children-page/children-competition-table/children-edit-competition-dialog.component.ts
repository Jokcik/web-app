import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Competition} from '../../admin/edit/shared/competition';
import {CompetitionPlace} from '../../admin/edit/shared/competition-place';
import {CompetitionLevel} from '../../admin/edit/shared/competition-level';
import {ChildrenCompetition} from '../../admin/edit/shared/children';
import {ODUtils} from '../../core/od-utils';

@Component({
  templateUrl: 'children-edit-competition-dialog.component.html',
})
export class ChildrenEditCompetitionDialogComponent {
  public currentCompetition: ChildrenCompetition;

  public competitions: Competition[];
  public places: CompetitionPlace[];
  public levels: CompetitionLevel[];

  public competitionIndex = -1;
  public specializationIndex = -1;
  public levelIndex = -1;
  public placeIndex = -1;

  public edit = false;

  constructor(public dialogRef: MatDialogRef<ChildrenEditCompetitionDialogComponent>,
              public odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data.competition;
    this.places = data.places;
    this.levels = data.levels;
    this.competitions = data.competitions;

    if (this.currentCompetition.competition) {
      this.edit = true;
      this.competitionIndex = this.odUtils.getIdInArray(this.currentCompetition.competition.title, this.competitions, 'title');
      this.specializationIndex = this.odUtils.getIdInArray(this.currentCompetition.specialization.title, this.currentCompetition.competition.specialization, 'title');
      this.levelIndex = this.odUtils.getIdInArray(this.currentCompetition.level.title, this.levels, 'title');
      this.placeIndex = this.odUtils.getIdInArray(this.currentCompetition.place.title, this.places, 'title');
    }
  }

  public add(): void {
    this.dialogRef.close({type: 'edit', value: this.currentCompetition});
  }

  public deleteCompetition() {
    if (!window.confirm('Вы действительно хотите удалить этот конкурс?')) { return; }
    this.dialogRef.close({type: 'remove', value: this.currentCompetition});
  }
}
