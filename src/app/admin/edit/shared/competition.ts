import {CompetitionLevel} from './competition-level';
import {CompetitionPlace} from './competition-place';

export class Competition {
  id: string;
  title: string;
  date: Date;
  level: CompetitionLevel;
  place: CompetitionPlace;
}
