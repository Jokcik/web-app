import { Document } from 'mongoose';
import {Schools} from '../../../app/admin/edit/shared/school';

export interface Profile extends Document {
  readonly id: string;
  readonly surname: string;
  readonly name: string;
  readonly middleName: string;
  readonly role: number;
  readonly nickname: string;
  readonly schools: Schools;
}
