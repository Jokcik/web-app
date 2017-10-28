import { Component, OnInit } from '@angular/core';
import {MainpageService} from './mainpage.service';
import {Description} from '../news/shared/description';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent implements OnInit {
  descriptions: Description[] = [];

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
    this.descriptions = this.mainpageService.get();
  }

}
