import {Component, OnInit} from '@angular/core';
import {Dummy} from '../core/dummy';
import {Materials} from '../news/shared/materials';
import {EventService} from '../history/event.service';
import {Router} from '@angular/router';
import {UserService} from '../core/user-service/user.service';
import {UpdateService} from './update.service';

@Component({
  selector: 'od-announce',
  templateUrl: './announce.component.html',
  providers: [EventService]
})
export class AnnounceComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 5);
  public loaded = true;

  constructor(private service: EventService,
              public userService: UserService,
              private announceService: UpdateService,
              private router: Router) { }


  public edit(news: Materials) {
    this.router.navigate(['admin/edit/news', news.url]);
  }

  public remove(news: Materials) {
    if (window.confirm('Вы действительно хотите удалить этот аннос?')) {
      this.service.remove({_id: news._id}).$observable.subscribe(() => {
        this.descriptions = this.descriptions.filter(material => material._id !== news._id);
      });
    }
  }

  ngOnInit() {
    this.formatAnnounce();
    this.announceService.changeAnnounce.subscribe(() => this.formatAnnounce());
  }

  public formatAnnounce() {
    this.service.queryMainpage({type: 2}).$observable.subscribe(descriptions => {
      this.descriptions = descriptions;
      this.loaded = false;
    });
  }
}
