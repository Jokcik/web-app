import {Component, Input, OnChanges, OnInit, ViewChild, SimpleChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Dummy} from '../../core/dummy';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Competition} from '../../admin/edit/shared/competition';
import {CompetitionsDialogAdd} from './competitions-dialog-add';

@Component({
  selector: 'od-competition-table',
  templateUrl: './competition-table.component.html'
})
export class CompetitionTableComponent implements OnChanges, AfterViewInit {
  public dataSourceCompetition: Competition[] = [];
  @Input() competitions: Competition[] = Dummy.factory(Competition, 10);
  @Input() isOpenEdit: boolean = false;
  @Output() changeCompetition: EventEmitter<any> = new EventEmitter<any>();

  public displayedColumns = ['id', 'title'];
  public dataSource: MatTableDataSource<Competition> = new MatTableDataSource(this.dataSourceCompetition);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {
  }

  ngOnChanges(changes?: SimpleChanges): void {
    this.dataSourceCompetition.length = 0;
    this.competitions.forEach((value, index) => value.num = index + 1);
    this.dataSourceCompetition.push(...this.competitions);
    this.dataSource._updateChangeSubscription();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate =
      (data, filter) => data.title.toLowerCase().includes(filter)
        || (data.specialization && data.specialization.title.toLowerCase().includes(filter))
        || data.level.title.toLowerCase().includes(filter);
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public openCompetition(competition: Competition) {
    this.dialog.open(CompetitionsDialogAdd, {width: '800px', data: {competition: competition, edit: this.isOpenEdit}})
      .afterClosed()
      .subscribe(result => result && this.changeCompetition.emit(result));
  }

  public newCompetitions() {
    this.openCompetition(null);
  }
}
