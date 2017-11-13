import { Component, OnInit } from '@angular/core';
import {MainpageService} from './mainpage.service';
import {Description, Materials} from '../news/shared/materials';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {
  descriptions: Materials[] = [];

  constructor(private mainpageService: MainpageService) {
  }

  ngOnInit() {
    this.mainpageService.querySafeHtml().subscribe(descriptions => this.descriptions = descriptions);
  }

  public imageSources: string[] = [
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];

  // public config: ICarouselConfig = {
  //   verifyBeforeLoad: true,
  //   log: false,
  //   animation: true,
  //   animationType: AnimationConfig.APPEAR,
  //   autoplay: true,
  //   autoplayDelay: 2000,
  //   stopAutoplayMinWidth: 768
  // };
}
