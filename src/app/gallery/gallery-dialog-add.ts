import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'dshi-dialog-add',
  templateUrl: 'gallery-dialog-add.html',
})
export class GalleryDialogAdd {
  constructor(public dialogRef: MatDialogRef<GalleryDialogAdd>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public add(): void {
    this.dialogRef.close({school: 1});
  }

}
