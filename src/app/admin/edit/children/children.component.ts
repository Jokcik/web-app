import {map, switchMap} from 'rxjs/operators';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Children} from '../shared/children';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../../core/user-service/user.service';
import {ODUtils} from '../../../core/od-utils';
import {EMPTY} from 'rxjs/internal/observable/empty';
import {Observable} from 'rxjs/Observable';
import {ResourceMethod} from 'ngx-resource/src/Interfaces';

@Component({
  selector: 'od-edit-children',
  templateUrl: './children.component.html'
})
export class ChildrenComponent implements OnInit, AfterViewInit {
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public childrens: Children[] = [];

  public currentRegion = -1;
  public currentSchool = -1;
  /*  Таблица  */
  public displayedColumns = ['id', 'surname', 'name', 'middleName', 'rating'];
  public dataSource: MatTableDataSource<Children>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public editable = false;
  public currentIndex = -2;
  /*  конец таблицы  */

  constructor(private regionService: RegionService,
              private schoolsService: SchoolsService,
              private childrenService: ChildrenPageService,
              public userService: UserService,
              public snackBar: MatSnackBar,
              private odUtils: ODUtils,
              public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.dataSource = new MatTableDataSource(this.childrens);

    this.regionService.query().$observable.pipe(switchMap(regions => {
      this.regions = regions;

      const schools: Schools = this.userService.user.schools || <any>(JSON.parse(localStorage.getItem('od_select_schools')));
      if (!schools || !schools.region) { return EMPTY; }
      const idx = this.odUtils.getIdInArray(schools.region.title, this.regions, 'title');

      return this.selectedRegion(idx).pipe(map(value => [schools, value]));
    })).subscribe(([oldSchools, schools]: any) => {
      this.schools = schools;
      const idx = this.odUtils.getIdInArray(oldSchools.title, this.schools, 'title');

      this.selectedSchools(idx);
    });
  }

  public selectedRegion(regionIdx: number): Observable<Schools[]> {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;
    this.childrens.length = 0;
    const result = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
    this.schools = result

    return result.$observable;
  }

  public selectedSchools(schoolIdx: number) {
    this.currentSchool = schoolIdx;
    this.updateChildrens(schoolIdx);

    if (this.schools) {
      localStorage.setItem('od_select_schools', JSON.stringify(this.schools[schoolIdx]));
    }
  }

  // /* Функции для таблицы */
  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public close() {
    this.editable = false;
    this.currentIndex = -1;
  }

  public updateChildrens(schoolIdx) {
    console.log('updateChildrens', schoolIdx);
    this.childrenService.query({school_id: this.schools[schoolIdx]._id, long: true}).$observable.subscribe(childrens => {
      this.childrens.length = 0;
      this.childrens.push(...childrens);
      this.dataSource._updateChangeSubscription();
    });
  }
}
