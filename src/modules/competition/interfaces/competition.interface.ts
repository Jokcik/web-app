import { Document } from 'mongoose';
import {Specialization} from '../../others/interface/specialization.interface';

export interface Competition extends Document {
  readonly _id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly year2017: boolean;
  readonly year2018: boolean;
  readonly year2019: boolean;
  readonly year2020: boolean;
  readonly year2021: boolean;
  readonly year2022: boolean;
  readonly speicialization: Specialization;
  readonly level: string;
  readonly rateLevel: number;
}
