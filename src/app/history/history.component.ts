import {Component, OnInit} from '@angular/core';
import {HistoryService} from './history.service';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 1);
  public isFull: boolean = false;

  constructor(private mainpageService: HistoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainpageService.querySafeHtml({type: 0, url: params['id']}).subscribe(descriptions => this.descriptions = descriptions);
    });
  }
}
