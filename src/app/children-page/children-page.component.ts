import {Component, OnInit} from '@angular/core';
import {UserService} from '../core/user-service/user.service';
import {ChildrenPageService, IQueryChildrenParams} from './children-page.service';
import {Children, Instruments, Specialization} from '../admin/edit/shared/children';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {Schools} from '../admin/edit/shared/school';
import {SchoolsService} from '../schools/schools.service';

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
    this.updateChildren(this.info);
    this.regions = this.regionService.query();
    this.specializations = this.childrenService.querySpecializations();
  }

  updateChildren(info: IQueryChildrenParams) {
    info = Object.assign({}, info);
    console.log(info);
    this.childrenService.getChildrenWithRating(info).$observable.subscribe(childrens => this.childrens = childrens);
  }

  public selectedRegion(regionIdx: number) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;

    const region = this.regions[regionIdx];
    const _id = region ? region._id : undefined;
    this.info.region_id = _id;
    this.schools = this.schoolsService.query({region_id: _id});
    this.updateChildren(this.info);
  }

  public selectedSchools(schoolIdx: number) {
    this.currentSchool = schoolIdx;
    const school = this.schools[schoolIdx];
    this.info.school_id = school ? school._id : undefined;
    this.updateChildren(this.info);
  }

  public selectedSpecialization(specializationIdx: number) {
    this.currentSpecialization = specializationIdx;
    this.currentInstrument = -1;

    const specialization = this.specializations[specializationIdx];
    const _id = specialization ? specialization._id : undefined;
    this.info.specialization_id = _id;
    this.instruments = this.childrenService.queryInstruments({specialization_id: _id});
    this.updateChildren(this.info);
  }


  public selectedInstruments(instrumentIdx: number) {
    this.currentInstrument = instrumentIdx;
    const instrument = this.instruments[instrumentIdx];
    this.info.instrument_id = instrument ? instrument._id : undefined;
    this.updateChildren(this.info);
  }
}
