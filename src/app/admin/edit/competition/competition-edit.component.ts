import {Component, OnInit} from '@angular/core';
import {Competition} from '../shared/competition';
import {CompetitionService} from '../../../competition/competition.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Dummy} from '../../../core/dummy';

@Component({
  selector: 'od-competition-edit',
  templateUrl: './competition-edit.component.html',
})
export class CompetitionEditComponent implements OnInit {
  public competitions: Competition[] = Dummy.factory(Competition, 10);

  constructor(private competitionService: CompetitionService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateCompetitions();
  }

  public updateCompetitions() {
    this.competitionService.query().$observable.subscribe(competitions => this.competitions = competitions);
  }

  public openDialog(result: {competition: Competition, type: string}) {
    if (!result || !result.competition) { return; }

    if (result.type === 'add') {
      this.saveCompetition(result.competition);
    } else if (result.type === 'remove') {
      this.deleteCompetition(result.competition);
    }
  }

  public saveCompetition(competition: Competition) {
    if (!competition._id) {
      this.competitionService.save(competition).$observable.subscribe(() => {
        this.updateCompetitions();
        this.snackBar.open('Конкурс успешно добавлен', 'ОК', {duration: 2000});
      }, error2 => window.alert(`Ошибка сохранения. ${error2}`));
    } else {
      this.competitionService.update(competition).$observable.subscribe(() => {
        this.updateCompetitions();
        this.snackBar.open('Конкурс успешно изменен', 'ОК', {duration: 2000});
      }, error2 => window.alert(`Ошибка изменения. ${error2}`));
    }
  }

  public deleteCompetition(competition: Competition) {
    this.competitionService.remove({_id: competition._id}).$observable.subscribe(() => {
      this.updateCompetitions();
      this.snackBar.open('Конкурс успешно удален', 'ОК', {duration: 2000});
    }, error2 => window.alert(`Ошибка удаления. ${error2}`));
  }
}
