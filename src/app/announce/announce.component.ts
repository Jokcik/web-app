import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Dummy} from '../core/dummy';
import {Materials} from '../news/shared/materials';
import {EventService} from '../history/event.service';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {UpdateService} from './update.service';
import {combineLatest} from 'rxjs';
import {ODEngineService} from '../core/od-engine.service';
import {isPlatformServer} from '@angular/common';

@Component({
  selector: 'od-announce',
  templateUrl: './announce.component.html',
  providers: [EventService]
})
export class AnnounceComponent implements OnInit {
  public actualAnnounce: Materials[] = Dummy.factory(Materials, 6);
  public announce: Materials[] = Dummy.factory(Materials, 6);
  public loaded = true;

  public page = 1;
  public isBig: boolean = true;
  public isServer: boolean = false;

  constructor(private service: EventService,
              public userService: UserService,
              private updateService: UpdateService,
              @Inject(PLATFORM_ID) private platformId: Object,
              private engineService: ODEngineService,
              private router: Router) {
  }


  public edit(news: Materials) {
    this.router.navigate(['admin/edit/news', news.url]);
  }

  public remove(news: Materials) {
    if (window.confirm('Вы действительно хотите удалить этот аннос?')) {
      this.service.remove({_id: news._id}).$observable.subscribe(() => {
        this.actualAnnounce = this.actualAnnounce.filter(material => material._id !== news._id);
      });
    }
  }

  ngOnInit() {
    this.isServer = isPlatformServer(this.platformId);
    this.setEngine();
    window.addEventListener('resize', this.setEngine.bind(this));
    this.formatAnnounce();
    this.updateService.changeAnnounce.subscribe(() => this.formatAnnounce());
  }

  public setEngine() {
    this.isBig = this.engineService.isBigDesktop();
  }

  public formatAnnounce() {
    combineLatest(
      this.service.queryMainpage({type: 2, page: this.page}).$observable,
      this.service.queryMainpage({type: 2, page: this.page, unactual: true}).$observable
    ).subscribe(([actualAnnounce, announce]) => {
      this.actualAnnounce = [...actualAnnounce];
      this.announce = [...announce];
      this.loaded = false;
    });
  }

  public setPage() {
    this.page += 1;
    const obj = {type: 2, page: this.page, unactual: true};
    this.service.queryMainpage(obj).$observable.subscribe(announce => this.announce.push(...announce))
  }
}
