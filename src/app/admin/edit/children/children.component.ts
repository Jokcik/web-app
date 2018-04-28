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
import {switchMap} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';

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
  public displayedColumns = ['surname', 'name', 'middleName'];
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
      if (!this.userService.user.schools) { return empty<any>(); }
      const idx = this.odUtils.getIdInArray(this.userService.user.schools.region.title, this.regions, 'title');

      return this.selectedRegion(idx).$observable;
    })).subscribe(schools => {
      this.schools = schools;
      const idx = this.odUtils.getIdInArray(this.userService.user.schools.title, this.schools, 'title');

      this.selectedSchools(idx);
    });
  }

  public selectedRegion(regionIdx: number) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;
    this.childrens.length = 0;
    return this.schools = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
  }

  public selectedSchools(schoolIdx: number) {
    this.currentSchool = schoolIdx;
    this.updateChildrens(schoolIdx);
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
    this.childrenService.query({school_id: this.schools[schoolIdx]._id, long: true}).$observable.subscribe(childrens => {
      this.childrens.length = 0;
      this.childrens.push(...childrens);
      this.dataSource._updateChangeSubscription();
    });
  }
}
