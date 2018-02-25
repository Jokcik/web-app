import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'region-dialog-add',
  templateUrl: 'region-dialog-add.component.html',
})
export class RegionDialogAddComponent {
  public title: string;
  public telephone: string;

  constructor(public dialogRef: MatDialogRef<RegionDialogAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public add(): void {
    this.dialogRef.close({title: this.title, telephone: this.telephone});
  }

}
