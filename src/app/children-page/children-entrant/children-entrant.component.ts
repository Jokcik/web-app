import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {ChildrenPageService} from '../children-page.service';
import {Children} from '../../admin/edit/shared/children';
import {ODUtils, Ssuz} from '../../core/od-utils';

export interface Info  {
  ssuz?: Ssuz;
  year?: number;
}

@Component({
  selector: 'od-children-entrant',
  templateUrl: './children-entrant.component.html',
})
export class ChildrenEntrantComponent implements OnInit {
  public childrens: Children[] = [];
  public dbChildrens: Children[] = [];
  public ssuzs: Ssuz[] = [];

  public info: Info = {};

  constructor(public userService: UserService,
              public odUtils: ODUtils,
              public childrenService: ChildrenPageService) {
  }

  ngOnInit() {
    this.ssuzs = this.odUtils.getSsuz();
    this.childrenService.getEntrant().$observable.subscribe(child => {
      this.dbChildrens = child;
      this.childrens = this.dbChildrens;
    });
  }

  updateChildren(info: Info) {
    if (!info.ssuz && !info.year) {
      this.childrens = this.dbChildrens;
      return;
    }

    if (info.ssuz) {
      this.childrens = this.dbChildrens.filter(child => child.ssuzInfo.name === info.ssuz.id);
    }


    if (info.year) {
      this.childrens = this.childrens.filter(child => child.ssuzInfo.year === info.year);
    }

  }

  selectedSsuz(ssuzIdx: number) {
    this.info.ssuz = this.ssuzs[ssuzIdx];
    this.updateChildren(this.info);
  }

  selectedYear(year: number) {
    this.info.year = year;
    this.updateChildren(this.info);
  }
}
