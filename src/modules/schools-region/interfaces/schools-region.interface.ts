import { Document } from 'mongoose';

export interface SchoolsRegion extends Document {
  readonly id: string;
  readonly title: string;
  readonly url: string;
}
