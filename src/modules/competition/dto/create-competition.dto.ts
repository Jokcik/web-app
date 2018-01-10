export class CreateCompetitionDto {
  readonly _id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly year2017: boolean = false;
  readonly year2018: boolean = false;
  readonly year2019: boolean = false;
  readonly year2020: boolean = false;
  readonly year2021: boolean = false;
  readonly year2022: boolean = false;
  readonly specialization: string;
  readonly level: string;
}
