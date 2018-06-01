import {Component, OnInit, ViewChild} from '@angular/core';
import {Children} from '../../admin/edit/shared/children';
import {RegionService} from '../../admin/edit/region/region.service';
import {Schools} from '../../admin/edit/shared/school';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Region} from '../../admin/edit/shared/region';
import {ChildrenPageService} from '../children-page.service';
import {SchoolsService} from '../../schools/schools.service';
import {ODUtils} from '../../core/od-utils';
import {UserService} from '../../core/user-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'od-children-table-rating',
  templateUrl: './children-table-rating.component.html',
})
export class ChildrenTableRatingComponent implements OnInit {
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public childrens: Children[] = [];

  // public currentRegion = -1;
  // public currentSchool = -1;
  /*  Таблица  */
  public displayedColumns = ['id', 'fio', 'school', 'rating'];
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
              private router: Router,
              public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.dataSource = new MatTableDataSource(this.childrens);

    this.childrenService.getChildrenWithRating().$observable.subscribe(childrens => {
      this.childrens.push(...childrens);
      this.dataSource._updateChangeSubscription();
    });

    // this.regionService.query().$observable.pipe(switchMap(regions => {
    //   this.regions = regions;
    //
    //   const schools: Schools = this.userService.user.schools || <any>(JSON.parse(localStorage.getItem('od_select_schools')));
    //   if (!schools || !schools.region) { return empty<any>(); }
    //   const idx = this.odUtils.getIdInArray(schools.region.title, this.regions, 'title');
    //
    //   return this.selectedRegion(idx).$observable.map(value => [schools, value]);
    // })).subscribe(([oldSchools, schools]) => {
    //   this.schools = schools;
    //   const idx = this.odUtils.getIdInArray(oldSchools.title, this.schools, 'title');
    //
    //   this.selectedSchools(idx);
    // });
  }

  public clickChildren(children: Children) {
    if (this.userService.user.role === 5 || (this.userService.user.schools && this.userService.user.schools._id == children.schools._id)) {
      this.router.navigate(['/admin/edit/children/edit/' + children._id])
    }
  }

  // public selectedRegion(regionIdx: number) {
  //   this.currentRegion = regionIdx;
  //   this.currentSchool = -1;
  //   this.childrens.length = 0;
  //   return this.schools = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
  // }
  //
  // public selectedSchools(schoolIdx: number) {
  //   this.currentSchool = schoolIdx;
  //   this.updateChildrens(schoolIdx);
  //
  //   if (this.schools) {
  //     localStorage.setItem('od_select_schools', JSON.stringify(this.schools[schoolIdx]));
  //   }
  // }

  // /* Функции для таблицы */
  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
