import {CompetitionLevel} from './competition-level';
import {CompetitionPlace} from './competition-place';

export class Competition {
  _id: string;
  title: string;
  year2017: boolean = false;
  year2018: boolean = false;
  year2019: boolean = false;
  year2020: boolean = false;
  year2021: boolean = false;
  year2022: boolean = false;
  level: CompetitionLevel = new CompetitionLevel();
}
