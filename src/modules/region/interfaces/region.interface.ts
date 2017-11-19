import { Document } from 'mongoose';

export interface Region extends Document {
  readonly id: string;
  readonly title: string;
  readonly telephone: string;
}
