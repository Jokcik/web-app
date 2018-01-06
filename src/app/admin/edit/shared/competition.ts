import {CompetitionLevel} from './competition-level';
import {CompetitionPlace} from './competition-place';

export class Competition {
  _id: string;
  title: string;
  date: Date;
  level: CompetitionLevel = new CompetitionLevel();
}
