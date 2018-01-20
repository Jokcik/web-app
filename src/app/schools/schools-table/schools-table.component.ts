import {AfterViewInit, Component, DoCheck, EventEmitter, Input, IterableDiffers, Output, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Schools} from '../../admin/edit/shared/school';
import {SchoolsDialogAdd} from './schools-dialog-add';

@Component({
  selector: 'od-schools-table',
  templateUrl: './schools-table.component.html',
})
export class SchoolsTableComponent implements DoCheck, AfterViewInit {
  public dataSourceSchools: Schools[] = [];
  @Input() schools: Schools[];
  @Input() isOpenEdit: boolean = false;
  @Input() type: number = 0;
  @Output() changeSchools: EventEmitter<any> = new EventEmitter<any>();

  public displayedColumns = ['title', 'nameMainPerson'];
  public dataSource: MatTableDataSource<Schools> = new MatTableDataSource(this.dataSourceSchools);
  private differ: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create(null);
  }

  ngDoCheck(): void {
    if (this.differ.diff(this.schools)) {
      this.dataSourceSchools.length = 0;
      this.dataSourceSchools.push(...this.schools);
      this.dataSource._updateChangeSubscription();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate =
      (data, filter) => data.title.toLowerCase().includes(filter)
        || (data.mainPerson && data.mainPerson.name.toLowerCase().includes(filter))
        || data.address.toLowerCase().includes(filter);
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public openSchools(school: Schools) {
    this.dialog.open(SchoolsDialogAdd, {width: this.isOpenEdit ? '1100px' : '800px', data: {school: school, edit: this.isOpenEdit}})
      .afterClosed()
      .subscribe(result => result && this.changeSchools.emit(result));
  }

  public newSchools() {
    this.openSchools(null, );
  }
}
