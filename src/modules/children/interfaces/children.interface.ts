import { Document } from 'mongoose';
import {Competition} from '../../competition/interfaces/competition.interface';
import {CompetitionLevel} from '../../others/interface/competition-level.interface';
import {CompetitionPlace} from '../../others/interface/competition-place.interface';
import {SchoolsRegion} from '../../schools-region/interfaces/schools-region.interface';
import {Instruments} from '../../others/interface/instruments.interface';

export class ChildrenCompetition {
  competition: Competition;
  year: number;
  level: CompetitionLevel;
  place: CompetitionPlace;
}

export interface SsuzInfo {
  year: number;
  name: string;
  otherName: string;
}

export interface Children extends Document {
  readonly name: string;
  readonly surname: string;
  readonly middleName: string;
  readonly schools: SchoolsRegion;
  readonly instruments: Instruments;
  readonly classDSHI: number;
  readonly class: number;

  readonly birthday: Date;
  readonly graduateDSHI: string; // год окончания ДШИ
  readonly ssuz: boolean;
  readonly leave: boolean;
  readonly competitions: ChildrenCompetition[];

  readonly ssuzInfo: SsuzInfo;
}
