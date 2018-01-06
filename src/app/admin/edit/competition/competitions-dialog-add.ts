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
  public places: CompetitionPlace[] = [];
  public placeIdx: number = -1;
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  constructor(public dialogRef: MatDialogRef<CompetitionsDialogAdd>,
              private competitionService: CompetitionService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentCompetition = data ? data : this.currentCompetition;

    this.competitionService.queryLevels().$observable.subscribe(levels => {
      this.levels = levels;
      this.levelIdx = this.odUtils.getIdInArray(this.currentCompetition.level.title, levels, 'title');
    });

    this.competitionService.queryPlaces().$observable.subscribe(places => {
      this.places = places;
      this.placeIdx = this.odUtils.getIdInArray(this.currentCompetition.place.title, places, 'title');
    });
  }

  public add(): void {
    // this.currentSchool.region = <any>this.currentSchool.region._id;
    // this.dialogRef.close({school: this.currentSchool});
  }

}
