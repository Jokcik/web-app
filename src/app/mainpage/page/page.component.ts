import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {MainpageService} from '../mainpage.service';
import {empty} from 'rxjs/observable/empty';
import {Materials} from '../../news/shared/materials';

@Component({
  selector: 'od-page',
  templateUrl: './page.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  private material: Materials;

  constructor(private route: ActivatedRoute,
              private mainpageService: MainpageService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        if (params['action'] == 'history') {
          return this.mainpageService.querySafeHtml();
        }

        return empty();
      })
    ).subscribe(materials => this.material = materials[0]);
  }

}
