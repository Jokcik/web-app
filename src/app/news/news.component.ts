import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../mainpage/mainpage.service';
import {Materials} from './shared/materials';
import {Dummy} from '../core/dummy';
import {Router} from '@angular/router';

@Component({
  selector: 'od-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded: boolean = true;

  constructor(private mainpageService: MainpageService,
              private router: Router) {
  }

  ngOnInit() {
    this.mainpageService.querySafeHtml({main: false}).subscribe(descriptions => {
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
