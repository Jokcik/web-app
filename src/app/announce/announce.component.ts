import { Component, OnInit } from '@angular/core';
import {Dummy} from '../core/dummy';
import {Materials} from '../news/shared/materials';
import {HistoryService} from '../history/history.service';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-announce',
  templateUrl: './announce.component.html',
  providers: [HistoryService]
})
export class AnnounceComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded: boolean = true;

  constructor(private service: HistoryService,
              public userService: UserService,
              private router: Router) { }


  public edit(news: Materials) {
    this.router.navigate(['admin/edit/news', news.url]);
  }

  public remove(news: Materials) {
    if (window.confirm('Вы действительно хотите удалить этот аннос?')) {
      this.service.remove({_id: news._id}).$observable.subscribe(() => {
        this.descriptions = this.descriptions.filter(material => material._id != news._id);
      })
    }
  }

  ngOnInit() {
    this.service.querySafeHtml({type: 2}).subscribe(descriptions => {
      this.descriptions = descriptions;
      this.loaded = false;
    });
  }

}
