import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Children} from '../shared/children';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../../core/user-service/user.service';

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
              public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.dataSource = new MatTableDataSource(this.childrens);
    this.regions = this.regionService.query();
  }

  public selectedRegion(regionIdx: number) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;
    this.schools = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
    this.childrens.length = 0;
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
