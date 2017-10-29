import { Component, OnInit } from '@angular/core';
import {MainpageService} from './mainpage.service';
import {Description} from '../news/shared/description';
import {ICarouselConfig, AnimationConfig} from 'angular4-carousel';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {
  descriptions: Description[] = [];

  constructor(private mainpageService: MainpageService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.descriptions = this.mainpageService.get();
    this.descriptions.forEach((value, index) => {
      let f = this.sanitizer.bypassSecurityTrustHtml(<string>value.short_description);
      f.toString = () => (<any>f).changingThisBreaksApplicationSecurity;
      this.descriptions[index].short_description = f;
    });
  }

  public imageSources: string[] = [
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
}
