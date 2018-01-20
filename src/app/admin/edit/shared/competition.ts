import {CompetitionLevel} from './competition-level';
import {CompetitionPlace} from './competition-place';
import {Specialization} from './children';

export class Competition {
  _id: string;
  title: string;
  shortTitle: string;
  year2017: boolean = false;
  year2018: boolean = false;
  year2019: boolean = false;
  year2020: boolean = false;
  year2021: boolean = false;
  year2022: boolean = false;
  specialization: Specialization = new Specialization();
  level: CompetitionLevel = new CompetitionLevel();
  files: {
    year2017?: CompetitionFiles[];
    year2018?: CompetitionFiles[];
    year2019?: CompetitionFiles[];
    year2020?: CompetitionFiles[];
    year2021?: CompetitionFiles[];
    year2022?: CompetitionFiles[];
  };

  num: number;
}


export class CompetitionFiles {
  name: string;
  url: string;
  title: string;
}
