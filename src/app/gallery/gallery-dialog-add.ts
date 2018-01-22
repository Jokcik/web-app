import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Gallery} from './shared/gallery';
import {MultipartItem, ODMultipartSendService} from '../core/od-multipart-send.service';

@Component({
  selector: 'dshi-dialog-add',
  templateUrl: 'gallery-dialog-add.html',
})
export class GalleryDialogAdd {
  public gallery: Gallery;
  public imgFile: File;

  constructor(public dialogRef: MatDialogRef<GalleryDialogAdd>,
              private multipart: ODMultipartSendService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.gallery = data ? data: new Gallery();
  }

  public loadFile() {
    if (!this.imgFile) return;

    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: this.imgFile},
      {name: 'type', value: 'gallery'}
    ];

    this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).then(data => this.gallery.img = data.url);
  }

  public add(): void {
    this.dialogRef.close({gallery: this.gallery, type: 1});
  }

  public remove() {
    this.dialogRef.close({gallery: this.gallery, type: -1});
  }
}
