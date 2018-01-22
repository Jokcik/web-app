import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Gallery} from './shared/gallery';
import {GalleryService} from './gallery.service';
import {NgxGalleryAnimation, NgxGalleryComponent, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ActivatedRoute} from '@angular/router';
import {GalleryDialogAdd} from './gallery-dialog-add';
import {UserService} from '../core/user-service/user.service';
import {Http} from '@angular/http';

@Component({
  selector: 'od-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  public galleries: Gallery[] = [];
  public isEditOpen: boolean = false;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  @ViewChild(NgxGalleryComponent) galleryComponent: NgxGalleryComponent;

  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar,
              private route: ActivatedRoute,
              public userService: UserService,
              private http: Http,
              private galleryService: GalleryService) {
  }

  async ngOnInit() {
    this.galleries = (await this.http.get('http://rumc31.ru:8080/api/children/specializations').toPromise()).json();
    this.route.data.subscribe(data => this.isEditOpen = data['edit'] || this.isEditOpen);
    this.galleryOptions = [
      {
        thumbnails: false,
        preview: false,
        image: false,
        width: '0px',
        height: '0px',
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      }
    ];

    this.update();
  }

  public async update() {
    this.galleries = (await this.http.get('http://rumc31.ru:8080/api/galleries').toPromise()).json();
    // this.galleryService.query().$observable.subscribe(galleries => {
      this.galleryImages = this.galleries.map(image => {return {small: image.img, medium: image.img, big: image.img, description: image.title}});
    // });
  }

  public openDialog(idx?: number) {
    if (!this.isEditOpen) {
      this.galleryComponent.openPreview(idx);
      return;
    }

    let gallery = this.galleries[idx];
    this.dialog.open(GalleryDialogAdd, {width: '500px', data: gallery ? gallery : ''}).afterClosed().subscribe(result => {
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
