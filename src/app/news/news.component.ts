import {Component, OnInit} from '@angular/core';
import {EventService} from '../history/event.service';
import {Materials} from './shared/materials';
import {Dummy} from '../core/dummy';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {UpdateService} from '../announce/update.service';
import {ODEngineService} from '../core/od-engine.service';

@Component({
  selector: 'od-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 6);
  public loaded = true;

  public page: number = 1;
  public onPage: number = 12;
  public isBig: boolean = true;

  constructor(private mainpageService: EventService,
              public userService: UserService,
              private updateService: UpdateService,
              private engineService: ODEngineService,
              private router: Router) {
  }

  ngOnInit() {
    this.setEngine();
    window.addEventListener('resize', this.setEngine.bind(this));
    this.formatNews();
    this.updateService.changeNews.subscribe(() => {
      this.page = 1;
      this.descriptions = [];
      this.formatNews();
    });
  }

  public setEngine() {
    this.isBig = this.engineService.isBigDesktop();
  }

  public formatNews() {
    this.mainpageService.querySafeHtml({type: 1, page: this.page, onPage: this.onPage}).subscribe(descriptions => {
      if (!this.descriptions[0] || !this.descriptions[0]._id ) {
        this.descriptions = [];
      }

      this.descriptions.push(...descriptions);
      this.loaded = false;
    });
  }

  public setPage() {
    this.page += 1;
    this.formatNews();
  }

  public edit(news: Materials) {
    this.router.navigate(['admin/edit/news', news.url]);
  }

  public remove(news: Materials) {
    if (window.confirm('Вы действительно хотите удалить эту новость?')) {
      this.mainpageService.remove({_id: news._id}).$observable.subscribe(() => {
        this.descriptions = this.descriptions.filter(material => material._id !== news._id);
      });
    }
  }
}
