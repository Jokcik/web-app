import {Component, OnInit} from '@angular/core';
import {CompetitionService} from './competition.service';
import {Competition} from '../admin/edit/shared/competition';
import {Dummy} from '../core/dummy';
import {UserService} from '../core/user-service/user.service';
import {Specialization} from '../admin/edit/shared/children';
import {logging} from 'selenium-webdriver';
import {ChildrenPageService} from '../children-page/children-page.service';
import {CompetitionLevel} from '../admin/edit/shared/competition-level';

@Component({
  selector: 'od-competition',
  templateUrl: './competition.component.html'
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition[];
  public filteredCompetitions: Competition[] = Dummy.factory(Competition, 10);

  public specializations: Specialization[] = [];
  public specializationId: any = 0;

  public levels: CompetitionLevel[] = [];
  public levelId: any = 0;

  public year2017: boolean = true;
  public year2018: boolean = true;
  public year2019: boolean = true;
  public year2020: boolean = true;
  public year2021: boolean = true;
  public year2022: boolean = true;

  constructor(private competitionService: CompetitionService,
              private childrenService: ChildrenPageService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.specializations = this.childrenService.querySpecializations();
    this.levels = this.competitionService.queryLevels();

    this.competitionService.query().$observable.subscribe(competitions => {
      this.competitions = competitions;
      this.formatCompetitions();
    });
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
    filter = filter.filter(value => !this.levelId || value.specialization && value.specialization._id == this.levelId);
    filter = filter.filter(value => !this.specializationId || value.specialization && value.specialization._id == this.specializationId);

    this.filteredCompetitions = filter;
  }
}
