import {Component, OnInit} from '@angular/core';
import {CompetitionService} from './competition.service';
import {Competition} from '../admin/edit/shared/competition';
import {Dummy} from '../core/dummy';
import {UserService} from '../core/user-service/user.service';
import {Specialization} from '../admin/edit/shared/children';
import {ChildrenPageService} from '../children-page/children-page.service';
import {CompetitionLevel} from '../admin/edit/shared/competition-level';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-competition',
  templateUrl: './competition.component.html'
})
export class CompetitionComponent implements OnInit {
  public isEditOpen = false;
  public competitions: Competition[];
  public filteredCompetitions: Competition[] = Dummy.factory(Competition, 10);

  public specializations: Specialization[] = [];
  public specializationId: any = 0;

  public levels: CompetitionLevel[] = [];
  public levelId: any = 0;

  public year2017 = true;
  public year2018 = true;
  public year2019 = true;
  public year2020 = true;
  public year2021 = true;
  public year2022 = true;

  constructor(private competitionService: CompetitionService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private childrenService: ChildrenPageService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.specializations = this.childrenService.querySpecializations();
    this.levels = this.competitionService.queryLevels();
    this.route.data.subscribe(data => this.isEditOpen = data['edit'] || this.isEditOpen);

    this.updateCompetitions();
  }

  public setSpecialization(specializationId: string) {
    this.specializationId = specializationId;
    this.formatCompetitions();
  }

  public setLevel(levelId: string) {
    this.levelId = levelId;
    this.formatCompetitions();
  }

  public formatCompetitions() {
    let filter = this.competitions.filter(value =>
      value.year2017 && this.year2017 ||
      value.year2018 && this.year2018 ||
      value.year2019 && this.year2019 ||
      value.year2020 && this.year2020 ||
      value.year2021 && this.year2021
    );
    filter = filter.filter(value => !this.levelId || value.level && value.level._id === this.levelId);
    filter = filter.filter(value => !this.specializationId ||
      value.specialization && value.specialization.some(spec => spec._id === this.specializationId));

    this.filteredCompetitions = filter;
  }

  public updateCompetitions() {
    this.competitionService.query().$observable.subscribe(competitions => {
      this.competitions = competitions;
      this.formatCompetitions();
    });
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
