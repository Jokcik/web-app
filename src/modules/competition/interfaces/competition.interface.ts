import { Document } from 'mongoose';

export interface Competition extends Document {
  readonly _id: string;
  readonly title: string;
  readonly year2017: boolean;
  readonly year2018: boolean;
  readonly year2019: boolean;
  readonly year2020: boolean;
  readonly year2021: boolean;
  readonly year2022: boolean;
  readonly level: string;
}
