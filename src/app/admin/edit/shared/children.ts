import {Schools} from './school';

export class Specialization {
  _id: string
  title: string;
}

export class Instruments {
  _id: string
  title: string;
  specialization: Specialization;
}

export class Children {
  name: string;
  surname: string;
  middleName: string;

  schools: Schools | string;
  instruments: Instruments | string;

  classDSHI: number;
  class: number;
}
