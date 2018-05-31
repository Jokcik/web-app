import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {EventService} from '../history/event.service';
import {Router} from '@angular/router';
import {UpdateService} from '../announce/update.service';
import {UserService} from '../core/user-service/user.service';
import {combineLatest, merge} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';
import {Http} from '@angular/http';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent implements OnInit {
  public news: Materials[] = Dummy.factory(Materials, 6);
  public announce: Materials[] = Dummy.factory(Materials, 6);
  public loaded = false;

  constructor(private eventService: EventService,
              public userService: UserService,
              private updateService: UpdateService,
              private http: TransferHttpService,
              @Inject(PLATFORM_ID) private platformId: Object,
              private router: Router) {
    this.loaded = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.formatEvent();
    merge(
      this.updateService.changeNews.pipe(startWith()),
      this.updateService.changeAnnounce,
    ).subscribe(() => this.formatEvent());
  }

  public formatEvent() {
    this.http.get('http://localhost:3001/api/news?type=1&page=1').subscribe(res => {
      console.log(res);
      this.news = [...res];
    });
    combineLatest(
      // this.eventService.queryMainpage({type: 1, page: 1}).$observable,
      this.eventService.queryMainpage({type: 2, page: 1}).$observable
    ).subscribe(([announce]) => {
      // this.news = [...news];
      this.announce = [...announce];
      this.loaded = false;
    }, err => console.log(err));
  }
}
