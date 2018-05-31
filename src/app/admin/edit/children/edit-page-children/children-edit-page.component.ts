import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Children, Instruments, Specialization} from '../../shared/children';
import {Region} from '../../shared/region';
import {Schools} from '../../shared/school';
import {SchoolsService} from '../../../../schools/schools.service';
import {ChildrenPageService} from '../../../../children-page/children-page.service';
import {RegionService} from '../../region/region.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {ODUtils} from '../../../../core/od-utils';
import {UserService} from '../../../../core/user-service/user.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'od-edit-page-children',
  templateUrl: './children-edit-page.component.html',
})
export class ChildrenEditPageComponent implements OnInit {
  public currentChildren: Children = new Children();
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public specializations: Specialization[] = [];
  public instruments: Instruments[] = [];

  public currentRegion = -1;
  public currentSchool = -1;
  public currentSpecialization = -1;
  public currentInstrument = -1;
  public currentSsuzSpecialization = -1;

  constructor(private childrenService: ChildrenPageService,
              private regionService: RegionService,
              private route: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId: Object,
              private router: Router,
              public userService: UserService,
              private odUtils: ODUtils,
              private schoolService: SchoolsService) {
  }

  ngOnInit() {
    combineLatest(
      this.regionService.query().$observable,
      this.childrenService.querySpecializations().$observable,
      this.route.params.pipe(switchMap(params => params['id'] ? this.childrenService.get({_id: params['id']}).$observable : of<any>(null)))
    ).subscribe(([regions, specializations, children]) => {
      this.regions = regions;
      this.specializations = specializations;
      try {
        this.formatChildren(children);
      } catch (e) {
        console.log(e);
      }
    });
  }

  public formatChildren(children: Children) {
    if (!children) {
      // if (this.userService.user.role !== 1) { return; }
      children = new Children();
      children.schools = this.userService.user.schools || (isPlatformBrowser(this.platformId) && <any>(JSON.parse(localStorage.getItem('od_select_schools'))));
    }

    this.currentChildren = children;
    this.currentRegion = this.odUtils.getIdInArray(children.schools.region.title, this.regions, 'title');
    this.getSchoolByRegion(this.currentRegion).$observable.subscribe(schools => {
      this.schools = schools;
      this.currentSchool = this.odUtils.getIdInArray(children.schools.title, schools, 'title');
    });

    this.currentSpecialization = this.odUtils.getIdInArray(children.instruments.specialization.title, this.specializations, 'title');
    this.getInstrumentsBySpecializations(this.currentSpecialization).$observable.subscribe(instuments => {
      this.instruments = instuments;
      this.currentInstrument = this.odUtils.getIdInArray(children.instruments.title, this.instruments, 'title');
    });

    if (children.ssuzInfo.specialization) {
      this.currentSsuzSpecialization = this.odUtils.getIdInArray(children.ssuzInfo.specialization.title, this.specializations, 'title');
    }
  }

  private getSchoolByRegion(regionId: number) {
    return this.schoolService.query({region_id: this.regions[regionId]._id});
  }

  public selectedRegion(regionId: number) {
    this.currentRegion = regionId;
    this.schools = this.getSchoolByRegion(regionId);
  }

  private getInstrumentsBySpecializations(specializationId: number) {
    return this.childrenService.queryInstruments({specialization_id: this.specializations[specializationId]._id});
  }

  public selectedSpecializations(specializationId: number) {
    this.currentSpecialization = specializationId;
    this.instruments = this.getInstrumentsBySpecializations(specializationId);
  }

  public deleteChildren() {
    if (!window.confirm('Вы действительно хотите удалить этого ребенка из базы данных?')) { return; }
    this.childrenService.remove({_id: this.currentChildren._id}).$observable.subscribe(
      children => this.router.navigate(['/admin/edit/children']),
      err => window.alert(JSON.stringify(err))
    );
  }

  public add(): void {
    if (this.currentChildren._id) {
      this.childrenService.updateChildren(this.currentChildren).subscribe(
        children => this.router.navigate(['/admin/edit/children']),
        err => window.alert(JSON.stringify(err))
      );
    } else {
      this.childrenService.saveChildren(this.currentChildren).subscribe(
        children => this.router.navigate(['/admin/edit/children']),
        err => window.alert(JSON.stringify(err))
      );
    }
  }

  public filterDate(d): boolean {
    console.log(d);
    if (!d) { return false; }
    const date = new Date(d.format());
    const now = new Date();
    now.setDate(now.getDate() - 1);
    return +now < +date && date.getFullYear() < 2023;
  }
}
