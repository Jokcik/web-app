import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../mainpage/mainpage.service';
import {Materials} from './shared/materials';
import {Dummy} from '../core/dummy';

@Component({
  selector: 'od-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded: boolean = true;

  constructor(private mainpageService: MainpageService) {
  }

  ngOnInit() {
    this.mainpageService.querySafeHtml({main: false}).subscribe(descriptions => {
      this.descriptions = descriptions;
      this.loaded = false;
    });
  }

}
