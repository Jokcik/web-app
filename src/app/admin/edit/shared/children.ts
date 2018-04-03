import {Schools} from './school';
import {CompetitionLevel} from './competition-level';
import {Competition} from './competition';
import {CompetitionPlace} from './competition-place';

export class Specialization {
  _id: string;
  title: string;
}

export class Instruments {
  _id: string;
  title: string;
  specialization: Specialization;
}

export class ChildrenCompetition {
  competition: Competition;
  specialization: Specialization;
  year: number = 2018;
  level: CompetitionLevel;
  place: CompetitionPlace;
}

export class SsuzInfo {
  year: number;
  name: string;
  otherName: string;
  specialization: Specialization;
}

export class Children {
  _id: string;
  name: string;
  surname: string;
  birthday: Date = new Date();
  graduateDSHI: number; // год окончания ДШИ
  middleName: string;
  ssuz: boolean;
  leave: boolean;
  competitions: ChildrenCompetition[] = [];

  ssuzInfo: SsuzInfo = <any>{year: new Date().getFullYear()};
  schools: Schools;
  instruments: Instruments;

  classDSHI: number;
  class: number;
}
