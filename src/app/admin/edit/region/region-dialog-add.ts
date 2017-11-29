import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'region-dialog-add',
  templateUrl: 'region-dialog-add.html',
})
export class RegionDialogAdd {
  public title: string;
  public telephone: string;
  public id: string;

  constructor(public dialogRef: MatDialogRef<RegionDialogAdd>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('41234123', data);
    if (data) {
      this.title = data.title;
      this.telephone = data.telephone;
      this.id = data._id;
    }
  }

  public add(): void {
    this.dialogRef.close({_id: this.id, title: this.title, telephone: this.telephone});
  }

}
