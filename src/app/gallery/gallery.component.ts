import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Gallery} from './shared/gallery';
import {GalleryService} from './gallery.service';
import {GalleryDialogAdd} from './gallery-dialog-add';

@Component({
  selector: 'od-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  public galleries: Gallery[] = [];

  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar,
              private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.update();
  }

  public update() {
    this.galleryService.query().$observable.subscribe(galleries => this.galleries = galleries);
  }

  public openDialog(currentGallery?: Gallery) {
    this.dialog.open(GalleryDialogAdd, {width: '500px', data: currentGallery ? currentGallery : ''}).afterClosed().subscribe(result => {
      if (!result || !result.gallery) return;

      if (result.type == -1) {
        return this.galleryService.remove({_id: result.gallery._id}).$observable.subscribe(() => {
          this.update();
          this.snackBar.open('Фотография успешно удалена', 'ОК', {duration: 2000})
        });
      }

      if (result.gallery._id) {
        this.galleryService.update(result.gallery).$observable.subscribe(() => {
          this.update();
          this.snackBar.open('Фотография успешно обновлена', 'ОК', {duration: 2000})
        });
      } else {
        this.galleryService.save(result.gallery).$observable.subscribe(() => {
          this.update();
          this.snackBar.open('Фотография успешно добавлена', 'ОК', {duration: 2000})
        });
      }
    });
  }

  public trackFunc(index, gallery: Gallery) {
    return gallery._id;
  }
}
