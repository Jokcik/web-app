import {Component, OnDestroy, OnInit} from '@angular/core';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {EventService} from '../history/event.service';
import {Router} from '@angular/router';
import {UpdateService} from '../announce/update.service';
import {UserService} from '../core/user-service/user.service';
import {combineLatest, merge} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {ODEngineService} from '../core/od-engine.service';

@Component({
  selector: 'od-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent implements OnInit, OnDestroy {
  public news: Materials[] = Dummy.factory(Materials, 6);
  public announce: Materials[] = Dummy.factory(Materials, 6);
  public loaded = true;
  public isBig: boolean = true;

  constructor(private eventService: EventService,
              public userService: UserService,
              private updateService: UpdateService,
              private engineService: ODEngineService,
              private router: Router) { }

  ngOnInit() {
    this.setEngine();
    window.addEventListener('resize', this.setEngine.bind(this));
    this.formatEvent();
    merge(
      this.updateService.changeNews.pipe(startWith()),
      this.updateService.changeAnnounce,
    ).subscribe(() => this.formatEvent());
  }

  public setEngine() {
    this.isBig = this.engineService.isBigDesktop();
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

  ngOnDestroy() {
    window.removeEventListener('resize', this.setEngine.bind(this));
  }
}
