import {Component, OnInit, ViewChild} from '@angular/core';
import {HistoryService} from '../../../history/history.service';
import {Materials} from '../../../news/shared/materials';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ODUtils} from '../../../core/od-utils';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {UpdateService} from '../../../announce/update.service';
import {NgxGalleryComponent, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'od-news-edit',
  templateUrl: './news-edit.component.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class NewsEditComponent implements OnInit {
  public news: Materials = new Materials();
  public imgFile: File;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  @ViewChild(NgxGalleryComponent) galleryComponent: NgxGalleryComponent;

  constructor(private service: HistoryService,
              private multipart: ODMultipartSendService,
              private router: Router,
              private updateService: UpdateService,
              private route: ActivatedRoute,
              private utils: ODUtils) {
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        image: false,
        height: '100px',
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      }
    ];

    this.route.params
      .pipe(switchMap(params => params['url'] ? this.service.queryMainpage({url: params['url']}).$observable : of([this.news])))
      .subscribe(news => {
        this.news = news[0];
        if (this.news.images && this.news.images.length) {
          this.galleryImages = this.news.images.map(image => {
            return {small: image, big: image};
          });
        }
      });
  }

  public filterDate(d): boolean {
    let date = new Date(d.format());
    let now = new Date();
    now.setDate(now.getDate() - 1);
    return +now < +date && date.getFullYear() < 2023;
  };

  public async loadLogoFile() {
    this.news.img = (await this.loadFile()).url;
  }

  public async loadGalleryFile() {
    let url = (await this.loadFile()).url;
    this.galleryImages.push({small: url, big: url});
  }

  private async loadFile(): Promise<{url: string}> {
    if (!this.imgFile) return;

    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: this.imgFile},
      {name: 'type', value: 'news'}
    ];

    return this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).toPromise();
  }

  public saveNews() {
    this.news.images = this.galleryImages.map(value => <string>value.small);

    if (this.news._id) {
      return this.service.update(this.news).$observable.subscribe(res => {
        this.updateMaterials();
        this.router.navigate(['news', res.url]);
      });
    }

    this.news.url = this.utils.translit(<any>this.news.title);
    this.news.date = this.news.type == 2 ? this.news.date : new Date();

    return this.service.save(this.news).$observable.subscribe(res => {
      this.updateMaterials();
      this.router.navigate(['news', res.url]);
    });
  }

  public updateMaterials() {
    if (this.news.type == 2) {
      this.updateService.changeAnnounce.next();
    }
    if (this.news.type == 1) {
      this.updateService.changeNews.next();
    }
  }
}
