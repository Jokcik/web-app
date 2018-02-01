import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../history/history.service';
import {Materials} from './shared/materials';
import {Dummy} from '../core/dummy';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {UpdateService} from '../announce/update.service';

@Component({
  selector: 'od-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded: boolean = true;
  public JSON = JSON;

  constructor(private mainpageService: HistoryService,
              public userService: UserService,
              private updateService: UpdateService,
              private router: Router) {
  }

  ngOnInit() {
    this.formatNews();
    this.updateService.changeNews.subscribe(() => this.formatNews());
  }

  public formatNews() {
    this.mainpageService.queryMainpage({type: 1}).$observable.subscribe(descriptions => {
      this.descriptions = descriptions;
      this.loaded = false;
    });
  }

  public edit(news: Materials) {
    this.router.navigate(['admin/edit/news', news.url]);
  }

  public remove(news: Materials) {
    if (window.confirm('Вы действительно хотите удалить эту новость?')) {
      this.mainpageService.remove({_id: news._id}).$observable.subscribe(() => {
        this.descriptions = this.descriptions.filter(material => material._id != news._id);
      })
    }
  }
}
