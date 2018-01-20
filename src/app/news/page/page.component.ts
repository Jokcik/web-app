import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HistoryService} from '../../history/history.service';
import {empty} from 'rxjs/observable/empty';
import {Materials} from '../shared/materials';
import {UserService} from '../../core/user-service/user.service';

@Component({
  selector: 'od-page',
  templateUrl: './page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  public material: Materials;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mainpageService: HistoryService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(params => this.mainpageService.querySafeHtml({url: params['url']})))
      .subscribe(materials => {
        if(!materials || !materials.length) {
          this.router.navigate(['/404-notfound'], {skipLocationChange: true});
        }
        this.material = materials[0]
      });
  }

}
