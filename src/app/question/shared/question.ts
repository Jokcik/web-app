export class Question {
  id: number;
  title: string;
  options: string[];
  hint?: string[];
  type: number;

  results: number[];
}
