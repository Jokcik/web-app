import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {ChildrenPageService} from '../children-page.service';
import {Children, Specialization} from '../../admin/edit/shared/children';
import {ODUtils, Ssuz} from '../../core/od-utils';

export interface Info  {
  ssuz?: Ssuz;
  year?: number;
  specialization_id?: string;
}

@Component({
  selector: 'od-children-entrant',
  templateUrl: './children-entrant.component.html',
})
export class ChildrenEntrantComponent implements OnInit {
  public childrens: Children[] = [];
  public dbChildrens: Children[] = [];

  public specializations: Specialization[] = [];
  public ssuzs: Ssuz[] = [];

  public currentSpecialization: number = -1;
  public info: Info = {};

  constructor(public userService: UserService,
              public odUtils: ODUtils,
              public childrenService: ChildrenPageService) {
  }

  ngOnInit() {
    this.ssuzs = this.odUtils.getSsuz();
    this.specializations = this.childrenService.querySpecializations();
    this.updateDBChildrenBySpecializations(this.info);
  }

  updateDBChildrenBySpecializations(info: Info) {
    this.childrenService.getEntrant({specialization_id: info.specialization_id}).$observable.subscribe(child => {
      this.dbChildrens = child;
      this.updateChildren(this.info);
    });
  }

  updateChildren(info: Info) {
    this.childrens = this.dbChildrens;

    if (info.ssuz) {
      this.childrens = this.childrens.filter(child => child.ssuzInfo.name === info.ssuz.id);
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

  public selectedSpecialization(specializationIdx: number) {
    this.currentSpecialization = specializationIdx;

    const specialization = this.specializations[specializationIdx];
    this.info.specialization_id = specialization ? specialization._id : undefined;
    this.updateDBChildrenBySpecializations(this.info);
  }
}
