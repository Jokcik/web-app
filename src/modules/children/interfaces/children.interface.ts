import { Document } from 'mongoose';
import {Schools} from '../../../app/admin/edit/shared/school';
import {Instruments} from '../../others/interface/instruments.interface';

export interface Children extends Document {
  readonly name: string;
  readonly surname: string;
  readonly middleName: string;

  readonly schools: Schools;
  readonly instruments: Instruments;

  readonly classDSHI: number;
  readonly class: number;
}
