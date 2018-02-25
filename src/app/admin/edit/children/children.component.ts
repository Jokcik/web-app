import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Children} from '../shared/children';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ChildrenDialogAddComponent} from './children-dialog-add.component';
import {UserService} from '../../../core/user-service/user.service';

@Component({
  selector: 'od-edit-children',
  templateUrl: './children.component.html'
})
export class ChildrenComponent implements OnInit, AfterViewInit {
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public childrens: Children[] = [];

  public currentRegion: number;
  public currentSchool: number;
  public currentChildren: number;

  /*  Таблица  */
  public displayedColumns = ['surname', 'name', 'middleName', 'edit', 'delete'];
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
    this.currentChildren = -1;
    this.schools = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
    this.childrens.length = 0;
  }

  public selectedSchools(schoolIdx: number) {
    this.currentSchool = schoolIdx;
    this.currentChildren = -1;
    this.updateChildrens(schoolIdx);
  }

  public selectedChildren(childrenIdx: number) {
    this.currentChildren = childrenIdx;
  }

  public openDialog() {
    const data = {regions: this.regions, currentRegion: this.currentRegion, currentSchool: this.currentSchool, schools: this.schools};
    this.dialog.open(ChildrenDialogAddComponent, {width: '900px', data: data}).afterClosed().subscribe(result => {
      if (!result) { return; }

      if (result._id) {
        this.childrenService.update(result).$observable.subscribe(res => {
          this.updateChildrens(this.currentSchool);
          this.snackBar.open('Успешно сохранено', 'ОК', {duration: 2000});
        });
      } else {
        this.childrenService.save(result).$observable.subscribe(res => {
          this.updateChildrens(this.currentSchool);
          this.snackBar.open('Ученик добавлен в базу', 'ОК', {duration: 2000});
        });
      }
    });
  }

  /* Функции для таблицы */
  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public close() {
    this.editable = false;
    this.currentIndex = -1;
  }

  public editChildren(region: any, index: number) {
    if (!this.userService.user) { return; }

    if (index !== this.currentIndex) {
      this.editable = true;
      this.currentIndex = index;
    } else {
      this.childrenService.update(region).$observable.subscribe(() => this.snackBar.open('Успешно изменено', 'ОК', {duration: 2000}));
      this.close();
    }
  }

  public deleteChildren(row) {
    if (window.confirm('Действительно хотите удалить этот регион?')) {
      this.childrenService.remove({_id: row._id}).$observable.subscribe(() => {
        this.updateChildrens(this.currentSchool);
        this.snackBar.open('Успешно удалено', 'ОК', {duration: 2000});
      });
    }
  }

  public updateChildrens(schoolIdx) {
    this.childrenService.query({school_id: this.schools[schoolIdx]._id, long: true}).$observable.subscribe(childrens => {
      this.childrens.length = 0;
      this.childrens.push(...childrens);
      this.dataSource._updateChangeSubscription();
    });
  }
}
