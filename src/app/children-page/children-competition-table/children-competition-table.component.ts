import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ChildrenCompetition} from '../../admin/edit/shared/children';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CompetitionService} from '../../competition/competition.service';
import {CompetitionPlace} from '../../admin/edit/shared/competition-place';
import {CompetitionLevel} from '../../admin/edit/shared/competition-level';
import {ChildrenEditCompetitionDialogComponent} from './children-edit-competition-dialog.component';
import {Competition} from '../../admin/edit/shared/competition';
import {UserService} from '../../core/user-service/user.service';

@Component({
  selector: 'od-children-competition-table',
  templateUrl: './children-competition-table.component.html',
})
export class ChildrenCompetitionTableComponent implements OnInit, OnChanges, AfterViewInit {
  public dataSourceCompetition: ChildrenCompetition[] = [];
  @Input() competitions: ChildrenCompetition[];
  @Output() changeCompetitions: EventEmitter<ChildrenCompetition[]> = new EventEmitter<ChildrenCompetition[]>();

  public displayedColumns = ['competition', 'year', 'level', 'place'];
  public dataSource: MatTableDataSource<ChildrenCompetition> = new MatTableDataSource(this.dataSourceCompetition);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private places: CompetitionPlace[] = [];
  private levels: CompetitionLevel[] = [];
  private fullCompetitions: Competition[] = [];

  constructor(private competitionService: CompetitionService,
              public userService: UserService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.places = this.competitionService.queryPlaces();
    this.levels = this.competitionService.queryLevels();
    this.fullCompetitions = this.competitionService.query();
  }

  ngOnChanges(changes?: SimpleChanges): void {
    this.dataSourceCompetition.length = 0;
    this.dataSourceCompetition.push(...this.competitions);
    this.dataSource._updateChangeSubscription();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public async openCompetition(index: number, competition: ChildrenCompetition) {
    this.dialog.open(ChildrenEditCompetitionDialogComponent, {panelClass: 'col-lg-12', data: {competition: competition,
        places: this.places, levels: this.levels, competitions: this.fullCompetitions}})
      .afterClosed().subscribe(result => this.formatResultCompetition(index, result));
  }

  private formatResultCompetition(index: number, result: {type: string, value: ChildrenCompetition}) {
    if (!result) { return; }
    if (result.type === 'edit') {
      this.editResult(index, result.value);
    } else {
      this.removeResult(index);
    }

    this.ngOnChanges();
  }

  private removeResult(index) {
    const compFilter = this.competitions.filter((data, idx) => idx !== index);;
    this.competitions.length = 0;
    this.competitions.push(...compFilter);
  }

  private editResult(index, result) {
    if (index !== -1) {
      this.competitions[index] = result;
      return;
    }

    this.competitions.push(result);
  }

  public add() {
    this.openCompetition(-1, new ChildrenCompetition());
  }
}
