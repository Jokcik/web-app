import {Component, OnInit} from '@angular/core';
import {UserService} from '../core/user-service/user.service';
import {ChildrenPageService, IQueryChildrenParams} from './children-page.service';
import {Children, Instruments, Specialization} from '../admin/edit/shared/children';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {Schools} from '../admin/edit/shared/school';
import {SchoolsService} from '../schools/schools.service';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'od-children-page',
  templateUrl: './children-page.component.html'
})
export class ChildrenPageComponent implements OnInit {
  public childrens: Children[] = [];

  public regions: Region[] = [];
  public schools: Schools[] = [];
  public specializations: Specialization[] = [];
  public instruments: Instruments[] = [];

  public currentRegion: number = -1;
  public currentSchool: number = -1;
  public currentSpecialization: number = -1;
  public currentInstrument: number = -1;

  public info: IQueryChildrenParams = {};

  constructor(public userService: UserService,
              private regionService: RegionService,
              private schoolsService: SchoolsService,
              private childrenService: ChildrenPageService) { }

  ngOnInit() {
    combineLatest(
      this.regionService.query().$observable,
      this.childrenService.querySpecializations().$observable
    ).subscribe(([regions, specializations]) => {
      this.regions = regions;
      this.specializations = specializations;
      this.initInfo();
    })

  }

  initInfo() {
    if (!localStorage) { return; }

    const key = localStorage.getItem('info');
    let info: IQueryChildrenParams = {};
    if (key) {
      info = JSON.parse(key);
      info.ssuz = false;
    }

    let obser1$ = of();
    let obser2$ = of();

    if (!info.region_id && !info.specialization_id) {
      this.updateChildren(this.info);
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

    combineLatest(obser1$, obser2$).subscribe(() => this.updateChildren(this.info));
  }

  updateChildren(info: IQueryChildrenParams) {
    info = Object.assign({}, info);
    this.childrenService.getChildrenWithRating(info).$observable.subscribe(childrens => this.childrens = childrens);
    if (localStorage) {
      localStorage.setItem('info', JSON.stringify(info));
    }
  }

  public selectedRegion(regionIdx: number, update = true) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;

    const region = this.regions[regionIdx];
    const _id = region ? region._id : undefined;
    this.info.region_id = _id;
    this.info.school_id = undefined;
    if (update) {
      this.updateChildren(this.info);
    }

    return this.schools = this.schoolsService.query({region_id: _id});
  }

  public selectedSchools(schoolIdx: number, update = true) {
    this.currentSchool = schoolIdx;
    const school = this.schools[schoolIdx];
    this.info.school_id = school ? school._id : undefined;

    if(update) {
      this.updateChildren(this.info);
    }
  }

  public selectedSpecialization(specializationIdx: number, update = true) {
    this.currentSpecialization = specializationIdx;
    this.currentInstrument = -1;

    const specialization = this.specializations[specializationIdx];
    const _id = specialization ? specialization._id : undefined;
    this.info.specialization_id = _id;
    this.info.instrument_id = undefined;
    if (update) {
      this.updateChildren(this.info);
    }
    return this.instruments = this.childrenService.queryInstruments({specialization_id: _id});
  }


  public selectedInstruments(instrumentIdx: number, update = true) {
    this.currentInstrument = instrumentIdx;
    const instrument = this.instruments[instrumentIdx];
    this.info.instrument_id = instrument ? instrument._id : undefined;
    if (update) {
      this.updateChildren(this.info);
    }
  }
}
