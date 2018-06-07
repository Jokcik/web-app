import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {ChildrenPageService, IQueryChildrenParams} from '../children-page.service';
import {Children, Instruments, Specialization} from '../../admin/edit/shared/children';
import {ODUtils, Ssuz} from '../../core/od-utils';
import {Region} from '../../admin/edit/shared/region';
import {Schools} from '../../admin/edit/shared/school';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {RegionService} from '../../admin/edit/region/region.service';
import {of} from 'rxjs/internal/observable/of';
import {SchoolsService} from '../../schools/schools.service';

export interface Info  {
  ssuz?: number;
  year?: number;
}

@Component({
  selector: 'od-children-entrant',
  templateUrl: './children-entrant.component.html',
})
export class ChildrenEntrantComponent implements OnInit {
  public childrens: Children[] = [];
  public dbChildrens: Children[] = [];

  public regions: Region[] = [];
  public schools: Schools[] = [];
  public specializations: Specialization[] = [];
  public instruments: Instruments[] = [];
  public ssuzs: Ssuz[] = [];

  public currentRegion: number = -1;
  public currentSchool: number = -1;
  public currentSpecialization: number = -1;
  public currentInstrument: number = -1;
  public info: Info = {};
  public infoQuery: IQueryChildrenParams = {ssuz: true};

  constructor(public userService: UserService,
              public odUtils: ODUtils,
              public regionService: RegionService,
              public schoolsService: SchoolsService,
              public childrenService: ChildrenPageService) {
  }

  ngOnInit() {
    this.ssuzs = this.odUtils.getSsuz();

    combineLatest(
      this.childrenService.querySpecializations().$observable,
      this.regionService.query().$observable
    ).subscribe(([specializations, regions]) => {
      this.specializations = specializations;
      this.regions = regions;
      this.initInfo();
    })

    // this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
  }

  initInfo() {
    const key = localStorage.getItem('info');
    let info: IQueryChildrenParams = {};
    if (key) {
      info = JSON.parse(key);
      info.ssuz = true;
    }

    let obser1$ = of();
    let obser2$ = of();

    if (!info.region_id && !info.specialization_id) {
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
      return;
    }

    if (info.region_id) {
      const idx = this.regions.findIndex(region => region._id === info.region_id);
      obser1$ = this.selectedRegion(idx, false).$observable;
      obser1$.subscribe(() => {
        const idx = this.schools.findIndex(school => school._id === info.school_id);
        this.selectedSchools(idx, false);
      });
    }

    if (info.specialization_id) {
      const idx = this.specializations.findIndex(spec => spec._id === info.specialization_id);
      obser2$ = this.selectedSpecialization(idx, false).$observable;
      obser2$.subscribe(() => {
        const idx = this.instruments.findIndex(instrument => instrument._id === info.instrument_id);
        this.selectedInstruments(idx, false);
      });
    }

    combineLatest(obser1$, obser2$).subscribe(() => {
      this.initLastInfo();
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery)
    });
  }

  initLastInfo() {
    if (!localStorage) { return; }

    const info = localStorage.getItem('last_info');
    if (info) {
      this.info = JSON.parse(info);
    }
  }

  updateDBChildrenBySpecializations(info: Info, infoQuery: IQueryChildrenParams) {
    this.childrenService.getChildrenWithRating(infoQuery).$observable.subscribe(child => {
      this.dbChildrens = child;
      this.updateChildren(info);
    });
  }

  updateChildren(info: Info) {
    this.childrens = this.dbChildrens;

    if (info.ssuz) {
      this.childrens = this.childrens.filter(child => child.ssuzInfo.name === this.ssuzs[info.ssuz].id);
    }


    if (info.year) {
      this.childrens = this.childrens.filter(child => child.ssuzInfo.year === info.year);
    }

    if (localStorage) {
      localStorage.setItem('last_info', JSON.stringify(this.info));
      localStorage.setItem('info', JSON.stringify(this.infoQuery));
    }
  }

  selectedSsuz(ssuzIdx: number) {
    this.info.ssuz = ssuzIdx;
    this.updateChildren(this.info);
  }

  selectedYear(year: number) {
    this.info.year = year;
    this.updateChildren(this.info);
  }

  public selectedSpecialization(specializationIdx: number, update = true) {
    this.currentSpecialization = specializationIdx;
    const specialization = this.specializations[specializationIdx];
    const _id = specialization ? specialization._id : undefined;
    this.infoQuery.specialization_id = _id;
    if (update) {
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
    }

    return this.instruments = this.childrenService.queryInstruments({specialization_id: _id});
  }

  public selectedInstruments(instrumentIdx: number, update = true) {
    this.currentInstrument = instrumentIdx;
    const instrument = this.instruments[instrumentIdx];
    this.infoQuery.instrument_id = instrument ? instrument._id : undefined;
    if (update) {
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
    }
  }

  public selectedRegion(regionIdx: number, update = true) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;

    const region = this.regions[regionIdx];
    const _id = region ? region._id : undefined;
    this.infoQuery.region_id = _id;
    this.infoQuery.school_id = undefined;
    if (update) {
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
    }

    return this.schools = this.schoolsService.query({region_id: _id});
  }

  public selectedSchools(schoolIdx: number, update = true) {
    this.currentSchool = schoolIdx;
    const school = this.schools[schoolIdx];
    this.infoQuery.school_id = school ? school._id : undefined;
    if(update) {
      this.updateDBChildrenBySpecializations(this.info, this.infoQuery);
    }
  }
}
