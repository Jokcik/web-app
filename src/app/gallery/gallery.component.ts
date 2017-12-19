import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
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
              private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.update();
  }

  public update() {
    this.galleries = this.galleryService.query();
  }

  public openDialog(currentGallery?: Gallery) {
    this.dialog.open(GalleryDialogAdd, {width: '500px', data: currentGallery ? currentGallery : ''}).afterClosed().subscribe(result => {
      if (!result || !result.gallery) return;

      if (result.type == -1) {
        return this.galleryService.remove({_id: result.gallery._id}).$observable.subscribe(() => {
          this.update();
          window.alert('Фотография успешно удалена');
        });
      }

      if (result.gallery._id) {
        this.galleryService.update(result.gallery).$observable.subscribe(() => {
          this.update();
          window.alert('Фотография успешно обновлена');
        });
      } else {
        this.galleryService.save(result.gallery).$observable.subscribe(() => {
          this.update();
          window.alert('Фотография успешно добавлена');
        });
      }
    });
  }


}
