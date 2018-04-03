import {Specialization} from './specialization.interface';
import {Document} from 'mongoose';

export interface Instruments extends Document {
  title: string;
  specialization: Specialization;
}
