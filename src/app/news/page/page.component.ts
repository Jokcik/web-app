import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {MainpageService} from '../../mainpage/mainpage.service';
import {empty} from 'rxjs/observable/empty';
import {Materials} from '../shared/materials';

@Component({
  selector: 'od-page',
  templateUrl: './page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  public material: Materials;

  constructor(private route: ActivatedRoute,
              private mainpageService: MainpageService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        if (params['url'] == 'history') {
          return this.mainpageService.querySafeHtml({main: true});
        }
        return this.mainpageService.querySafeHtml({main: false, url: params['url']});
      })
    ).subscribe(materials => this.material = materials[0]);
  }

}
