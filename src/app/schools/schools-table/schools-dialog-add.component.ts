import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../../admin/edit/shared/school';
import {ODUtils} from '../../core/od-utils';
import {RegionService} from '../../admin/edit/region/region.service';
import {Region} from '../../admin/edit/shared/region';

@Component({
  selector: 'schools-dialog-add',
  templateUrl: 'schools-dialog-add.component.html',
})
export class SchoolsDialogAddComponent {
  public isEditDialog = false;
  public school: Schools = new Schools();

  public regions: Region[] = [];
  public regionIdx = -1;

  constructor(public dialogRef: MatDialogRef<SchoolsDialogAddComponent>,
              private regionService: RegionService,
              private odUtils: ODUtils,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.school = data.school ? data.school : this.school;
    this.isEditDialog = data.edit;

    this.regionService.query().$observable.subscribe(regions => {
      this.regions = regions;
      this.regionIdx = this.odUtils.getIdInArray(this.school.region.title, regions, 'title');
    });
  }

  public add(): void {
    this.school.region = <any>this.regions[this.regionIdx]._id;
    this.dialogRef.close({school: this.school, type: 'add'});
  }

  public deleteCompetition() {
    this.dialogRef.close({school: this.school, type: 'remove'});
  }


  redirectToSchool() {
    this.dialogRef.close({type: 'redirectToSchool', region: this.school.region._id});
  }
}
