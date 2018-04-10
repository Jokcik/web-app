import { Document } from 'mongoose';

export interface Teacher extends Document {
  readonly name: string;
  readonly suname: string;
  readonly moddleName: string;
}
