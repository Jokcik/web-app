import {Component, OnInit} from '@angular/core';
import {MainpageService} from './mainpage.service';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 1);
  public isFull: boolean = false;

  constructor(private mainpageService: MainpageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainpageService.querySafeHtml({type: 0, url: params['id']}).subscribe(descriptions => this.descriptions = descriptions);
    });
  }

  public imageSources: string[] = [
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];
}
