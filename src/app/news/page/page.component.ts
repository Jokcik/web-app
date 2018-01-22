import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HistoryService} from '../../history/history.service';
import {Materials} from '../shared/materials';
import {UserService} from '../../core/user-service/user.service';
import {NgxGalleryComponent, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'od-page',
  templateUrl: './page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  public material: Materials;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  @ViewChild(NgxGalleryComponent) galleryComponent: NgxGalleryComponent;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private mainpageService: HistoryService,
              public userService: UserService) {
  }

  ngOnInit() {


    this.galleryOptions = [
      {
        image: false,
        height: "100px",
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      },
      {
        breakpoint: 500,
        width: "100%"
      }
    ];

    this.route.params.pipe(switchMap(params => this.mainpageService.querySafeHtml({url: params['url']})))
      .subscribe(materials => {
        if (!materials || !materials.length) {
          this.router.navigate(['/404-notfound'], {skipLocationChange: true});
        }
        this.material = materials[0];

        // this.galleryImages = this.material.images.map(image => {
        //   return {small: image, medium: image, big: image};
        // });

      });
  }

}
