import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {Children} from '../../../admin/edit/shared/children';
import {RegionService} from '../../../admin/edit/region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {UserService} from '../../../core/user-service/user.service';
import {ODUtils, Ssuz} from '../../../core/od-utils';

@Component({
  selector: 'od-children-table-entrant',
  templateUrl: './children-table-entrant.component.html',
})
export class ChildrenTableEntrantComponent implements OnInit, OnChanges {
  @Input('childrens') inputChildrens: Children[] = [];
  public childrens: Children[] = [];

  /*  Таблица  */
  public displayedColumns = ['id', 'fio', 'school', 'ssuz', 'leave'];
  public dataSource: MatTableDataSource<Children>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public editable = false;
  public currentIndex = -2;
  /*  конец таблицы  */

  public ssuzs: Ssuz[] = [];

  constructor(private regionService: RegionService,
              private schoolsService: SchoolsService,
              public userService: UserService,
              public snackBar: MatSnackBar,
              private odUtils: ODUtils,
              private router: Router,
              public dialog: MatDialog) {
    this.ssuzs = this.odUtils.getSsuz();
  }

  public ngOnInit() {
    this.dataSource = new MatTableDataSource(this.childrens);
  }

  public ngOnChanges() {
    if (!this.dataSource) { return; }
    this.childrens.length = 0;
    this.childrens.push(...this.inputChildrens);
    this.dataSource._updateChangeSubscription();
  }

  public clickChildren(children: Children) {
    if (this.userService.user.role === 5 || (this.userService.user.schools && this.userService.user.schools._id == children.schools._id)) {
      this.router.navigate(['/admin/edit/children/edit/' + children._id])
    }
  }

  // /* Функции для таблицы */
  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate =
      (data, filter) => data.name.toLowerCase().includes(filter)
        || data.surname.toLowerCase().includes(filter)
        || data.middleName.toLowerCase().includes(filter);
  }

  public getSsuzName(id: number) {
    const ssuz = this.ssuzs.find(ssuz => ssuz.id === id);
    return ssuz ? ssuz.title : '';
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
