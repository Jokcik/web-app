class ChildrenCompetition {
  competition: string;
  year: number;
  level: string;
  place: string;
}

class SsuzInfo {
  year: number;
  name: string;
  otherName: string;
}

export class CreateChildrenDto {
  readonly name: string;
  readonly surname: string;
  readonly middleName: string;
  readonly schools: string;
  readonly instruments: string;
  readonly classDSHI: number;
  readonly class: number;

  readonly birthday: Date = new Date();
  readonly graduateDSHI: number; // год окончания ДШИ
  readonly ssuz: boolean;
  readonly leave: boolean;
  readonly competitions: ChildrenCompetition[] = [];

  readonly ssuzInfo: SsuzInfo;
}
