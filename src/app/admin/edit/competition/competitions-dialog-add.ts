import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Competition} from '../shared/competition';
import {CompetitionLevel} from '../shared/competition-level';
import {CompetitionPlace} from '../shared/competition-place';

@Component({
  selector: 'competition-dialog-add',
  templateUrl: 'competitions-dialog-add.html',
})
export class CompetitionsDialogAdd {
  public currentCompetition: Competition = new Competition();

  public levels: CompetitionLevel[] = [];
  public places: CompetitionPlace[] = [];
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data;
  }

  public add(): void {
    // this.currentSchool.region = <any>this.currentSchool.region._id;
    // this.dialogRef.close({school: this.currentSchool});
  }

}
