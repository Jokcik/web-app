export class CreateNewsDto {
  readonly title: string;
  readonly url: string;
  readonly type: number;
  readonly img: string;
  readonly date: Date;
  readonly description: string;
}
