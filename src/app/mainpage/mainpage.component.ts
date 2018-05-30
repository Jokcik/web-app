import { Component, OnInit } from '@angular/core';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {EventService} from '../history/event.service';
import {Router} from '@angular/router';
import {UpdateService} from '../announce/update.service';
import {UserService} from '../core/user-service/user.service';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {merge} from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent implements OnInit {
  public news: Materials[] = Dummy.factory(Materials, 6);
  public announce: Materials[] = Dummy.factory(Materials, 6);
  public loaded = true;

  constructor(private eventService: EventService,
              public userService: UserService,
              private updateService: UpdateService,
              private router: Router) { }

  ngOnInit() {
    this.formatEvent();
    merge(
      this.updateService.changeNews.pipe(startWith()),
      this.updateService.changeAnnounce,
    ).subscribe(() => this.formatEvent());
  }

  public formatEvent() {
    combineLatest(
      this.eventService.queryMainpage({type: 1, page: 1}).$observable,
      this.eventService.queryMainpage({type: 2, page: 1}).$observable
    ).subscribe(([news, announce]) => {
      this.news = [...news];
      this.announce = [...announce];
      this.loaded = false;
    });
  }
}
