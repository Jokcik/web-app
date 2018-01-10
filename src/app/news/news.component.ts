import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../history/history.service';
import {Materials} from './shared/materials';
import {Dummy} from '../core/dummy';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded: boolean = true;

  constructor(private mainpageService: HistoryService,
              public userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.mainpageService.querySafeHtml({type: 1}).subscribe(descriptions => {
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
