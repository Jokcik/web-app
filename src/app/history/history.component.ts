import {Component, OnInit} from '@angular/core';
import {HistoryService} from './history.service';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 1);

  constructor(private mainpageService: HistoryService,
              private route: ActivatedRoute,
              public userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainpageService.querySafeHtml({type: 0, url: params['id']}).then(descriptions => this.descriptions = descriptions);
    });
  }
}
