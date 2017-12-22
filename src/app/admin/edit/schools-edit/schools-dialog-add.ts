import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';

@Component({
  selector: 'dshi-dialog-add',
  templateUrl: 'schools-dialog-add.html',
})
export class DshiDialogAdd {
  public currentSchool: Schools = new Schools();
  public regions: Region[] = [];

  constructor(public dialogRef: MatDialogRef<DshiDialogAdd>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.regions = data;
  }

  public add(): void {
    this.currentSchool.region = <any>this.currentSchool.region._id;
    this.dialogRef.close({school: this.currentSchool});
  }

}
